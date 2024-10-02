import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL;
const PROXY_URL = import.meta.env.VITE_PROXY_URL;
export const convertRate = async (amount, exchangeCurrency) => {
    try{
        const response = await axios.get(`${PROXY_URL}?url=https://api.coingate.com/api/v2/rates/merchant/BTC/${exchangeCurrency}`, {
            headers: { accept: 'text/plain' }
        });
        const rate =  response.data;
        const convertedRate = (rate * amount).toFixed(2);
        return convertedRate;
    } catch(error){
        console.error('Error while converting rates', error);
        throw error;
    }
}
