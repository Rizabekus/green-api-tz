import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const { API_URL, ID_INSTANCE, API_TOKEN_INSTANCE } = process.env;

export async function getStateInstance(){
    const url=`${API_URL}/waInstance${ID_INSTANCE}/getStateInstance/${API_TOKEN_INSTANCE}`;
    
    try {
        const response=await axios.get(url);
        return response;
    } catch (error:any) {
        return error.response;}
}