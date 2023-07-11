import {config} from 'dotenv'
import { Configuration,OpenAIApi } from 'openai'
config()
console.log(process.env.API_KEY)
const api=new OpenAIApi(new Configuration())