import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const { API_URL, ID_INSTANCE, API_TOKEN_INSTANCE } = process.env;

export async function getChatHistory(chatId: string){
    const url=`${API_URL}/waInstance${ID_INSTANCE}/getChatHistory/${API_TOKEN_INSTANCE}`;
    const payload={
        chatId,
    }
    try {
        const response=await axios.post(url,payload);
        return response;
    } catch (error:any) {
        return error.response;}
}