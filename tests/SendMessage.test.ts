import dotenv from 'dotenv';
import {sendMessage} from '../src/SendMessage'
import { getStateInstance } from '../src/getStateInstance';
import { delay } from '../src/utils/utils';
dotenv.config();

describe('SendMessage Method', () => {
const validChatId=process.env.CHAT_ID as string;
const validMessage = 'Hello world!';

it('should send code 200', async()=>{
    const res=await sendMessage(validChatId,validMessage);
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty('idMessage');
     await delay(1100);
});
it('should send code 400 without chatId', async()=>{
    const res=await sendMessage('',validMessage);
    expect(res.status).toBe(400);
    expect(res.data).toHaveProperty('message');
     await delay(1100);
});
it('should send code 400 without message', async()=>{
    const res=await sendMessage(validChatId,'');
    expect(res.status).toBe(400);
    expect(res.data).toHaveProperty('message');
     await delay(1100);
})
it('should check if instance is authorized', async()=>{
    const res=await getStateInstance();
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty('stateInstance');
     await delay(1100);
});
})