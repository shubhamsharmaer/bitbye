import axios from 'axios';

export const getMarketRates = async () => {
    try{
        const response = await axios.get('https://blockchain.info/ticker');
        return response.data;
    } catch(error){
        console.error('Error while getting market rates', error);
        throw error;
    }
}