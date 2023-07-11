import {config} from 'dotenv'
import { Configuration,OpenAIApi } from 'openai'
import readline from 'readline'
config()
const api=new OpenAIApi(new Configuration({
    apiKey:process.env.API_KEY
}))
const ui=readline.createInterface({input:process.stdin,output:process.stdout})
ui.prompt()
api.createChatCompletion()