import dotenv from 'dotenv';
import {getChatHistory} from '../src/getChatHistory'
import {getStateInstance} from '../src/getStateInstance'
import { delay } from '../src/utils/utils';
dotenv.config();

describe('getChatHistory Method', () => {
const validChatId=process.env.CHAT_ID as string;
it('should send code 200', async()=>{
    const res=await getChatHistory(validChatId);
    expect(res.status).toBe(200);
    expect(res.data[0]).toHaveProperty('type');
    expect(res.data[0]).toHaveProperty('idMessage');
    expect(res.data[0]).toHaveProperty('timestamp');
    expect(res.data[0]).toHaveProperty('typeMessage');
    expect(res.data[0]).toHaveProperty('chatId');
    await delay(1100);
});
it('should send code 400 without chatID', async()=>{
    const res=await getChatHistory('');
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