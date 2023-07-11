import {config} from 'dotenv'
import { Configuration,OpenAIApi } from 'openai'
import readline from 'readline'
config()
const api=new OpenAIApi(new Configuration({
    apiKey:process.env.API_KEY,
}))
const ui=readline.createInterface({input:process.stdin,output:process.stdout})
ui.prompt()
ui.on('line',async input=>{
    const res=await api.createChatCompletion({
        model:"gpt-3.5-turbo",
        messages:[{role:"user",content:input}],
    })
    console.log(res.data.choices[0].message.content)
    ui.prompt()
})
