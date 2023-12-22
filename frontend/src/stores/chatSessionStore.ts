import {defineStore} from 'pinia'
import {ChatClient, Client, IChatSession, ChatMessage, CreateNewChat, ChatSession} from "../apis/ChatSessionApi";



const APIBASELINK = import.meta.env.VITE_CHAT_SESSION_API_BASE_URL
let chatClient = new ChatClient(APIBASELINK)
let client = new Client(APIBASELINK)


export const useChatSessionApiStore = defineStore('chatSessionStore', {
    state: () => ({
        sessionsList: JSON.parse(localStorage.getItem('sessionsList') || '[]') as IChatSession[],
        currentSession: null as IChatSession | null,
        searchInput: "",
        isMessageLoading: false,
    }),
    actions: {
        async loadAllSession(token: string) {
            try {
                const result = await chatClient.get(token);
                this.sessionsList = result || [];
                localStorage.setItem('sessionsList', JSON.stringify(this.sessionsList));
            } catch(error) {
                console.error("Failed to load sessions:", error);
                this.sessionsList = [];
            }

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
                this.updateSessionsCache();
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
                this.updateSessionsCache();
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
            await client.delete(session_id, token).then(response => response)
            await this.loadAllSession(token)
        },
        updateSessionsCache() {
            localStorage.setItem('sessionsList', JSON.stringify(this.sessionsList));
        },
    }
})