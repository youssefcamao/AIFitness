import {defineStore} from 'pinia'
import {ChatClient, Client, IChatSession, ChatMessage, CreateNewChat, ChatSession} from "../apis/ChatSessionApi";



const APIBASELINK = import.meta.env.VITE_CHAT_SESSION_API_BASE_URL
let chatClient = new ChatClient(APIBASELINK)
let client = new Client(APIBASELINK)


export const useChatSessionApiStore = defineStore('chatSessionStore', {
    state: () => ({
        sessionsList: [] as IChatSession[],
        currentSession: null as IChatSession | null,
        searchInput: "",
        isMessageLoading: false,
        areSessionsLoading: false,
    }),
    actions: {
        async loadAllSession(token: string) {
            this.areSessionsLoading = true
            this.sessionsList = []
            try {
                const result = await chatClient.get(token);
                this.sessionsList = result || [];
            } catch(error) {
                console.error("Failed to load sessions:", error);
                this.sessionsList = [];
            }
            this.areSessionsLoading = false

        },
        async sendMessageAndFetchResponse(newMessage: string, token: string) {
            let newMessageObj = new ChatMessage({role: 'user', content: newMessage})
            let newResponse = new ChatMessage({role: 'ai', content: ''})
            if(this.currentSession?.session_id) {
                this.currentSession.messages?.push(newMessageObj)
                this.isMessageLoading = true;
                let newResponse = new ChatMessage({role: 'ai', content: ''})
                this.currentSession.messages?.push(newResponse)
                await client.post(this.currentSession?.session_id, newMessage, token).then(response => newResponse.content = response.response)
                this.isMessageLoading = false
            }
            else {
                let session: IChatSession = new ChatSession({messages: [newMessageObj, newResponse]})
                this.currentSession = session
                this.isMessageLoading = true;
                let newChat: CreateNewChat | null = null;
                await chatClient.post(newMessage, token).then(response => newChat = response)
                this.currentSession.session_id = newChat!.session_id
                this.currentSession.session_title = newChat!.session_title
                this.currentSession.messages![this.currentSession.messages!.length - 1].content = newChat!.response
                this.sessionsList.push(session)
                this.isMessageLoading = false
            }
        },
        async setCurrentSession(sessionId: string | undefined) {
            if(!sessionId) {
                this.currentSession = null
            }
            let foundSession = this.sessionsList.find((a) => a.session_id == sessionId)
            if(foundSession) {
                this.currentSession = foundSession
            }
        },
        async deleteSession(session_id: string, token: string) {
            const previousSessionsList = [...this.sessionsList]; // Make a copy of the current state
            this.sessionsList = this.sessionsList.filter(session => session.session_id !== session_id);


            try {
                await client.delete(session_id, token);
            } catch(error) {
                console.error("Failed to delete session:", error);
                this.sessionsList = previousSessionsList;
                throw error;
            }

        },
    }
})