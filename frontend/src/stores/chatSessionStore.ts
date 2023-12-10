import {defineStore} from 'pinia'
import {ChatClient, Client, IChatSession, ChatMessage, } from "../apis/ChatSessionApi";



const APIBASELINK = import.meta.env.VITE_CHAT_SESSION_API_BASE_URL
let chatClient = new ChatClient(APIBASELINK)
let client = new Client(APIBASELINK)


export const useChatSessionApiStore = defineStore('chatSessionStore', {
    state: () => ({
        sessionsList: [] as IChatSession[],
        currentSession: null as IChatSession | null,
        searchInput: "",
        isMessageLoading: true,
        isFilterResult: false,
    }),
    actions: {
        async loadAllSession() {
            await chatClient.get().then(result => this.sessionsList = result || Array<IChatSession>())
                .catch(_ => this.sessionsList = Array<IChatSession>())
        },
        async SendMessageAndFetchResponse(newMessage: string) {
            if(this.currentSession?._id) {
                this.currentSession.messages?.push(new ChatMessage({role: 'user', content: newMessage}))
                this.isMessageLoading = true;
                await client.post(this.currentSession?._id, newMessage).then(response => this.currentSession!.messages?.push(new ChatMessage({role: 'ai', content: response.response})))
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