import axios from 'axios';

const API_URL = 'https://bitbye.onrender.com/api/v2/rates/merchant/BTC'
export const convertRate = async (amount, exchangeCurrency) => {
    try{
        const response = await axios.get(`${API_URL}/${exchangeCurrency}`, {
            headers: { accept: 'text/plain' }
        });
        const rate =  response.data;
        console.log('API Response:', response.data);
        const convertedRate = (rate * amount).toFixed(2);
        return convertedRate;
    } catch(error){
        console.error('Error while converting rates', error);
        throw error;
    }
}
