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
    }),
    actions: {
        async loadAllSession() {
            await chatClient.get().then(result => this.sessionsList = result || Array<IChatSession>())
                .catch(_ => this.sessionsList = Array<IChatSession>())
        },
        async SendMessageAndFetchResponse(newMessage: string) {
            let newMessageObj = new ChatMessage({role: 'user', content: newMessage})
            let newResponse = new ChatMessage({role: 'ai', content: ''})
            if(this.currentSession?._id) {
                this.currentSession.messages?.push(newMessageObj)
                this.isMessageLoading = true;
                let newResponse = new ChatMessage({role: 'ai', content: ''})
                this.currentSession.messages?.push(newResponse)
                await client.post(this.currentSession?._id, newMessage).then(response => newResponse.content = response.response)
                this.isMessageLoading = false
            }
            else {
                let session: IChatSession = new ChatSession({messages: [newMessageObj, newResponse]})
                this.currentSession = session
                this.isMessageLoading = true;
                let newChat: CreateNewChat | null = null;
                await chatClient.post(newMessage).then(response => newChat = response)
                this.currentSession._id = newChat!.session_id
                this.currentSession.session_title = newChat!.session_title
                this.currentSession.messages![this.currentSession.messages!.length - 1].content = newChat!.response
                this.sessionsList.push(session)
                this.isMessageLoading = false
            }
        },
        async SetCurrentSession(sessionId: string | undefined) {
            if(!sessionId) {
                this.currentSession = null
            }
            let foundSession = this.sessionsList.find((a) => a._id == sessionId)
            if(foundSession) {
                this.currentSession = foundSession
            }
        }
    }
})