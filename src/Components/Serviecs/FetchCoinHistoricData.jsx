import AxiosIncetance from "../../Helpers/AxiosIncetance";

export async function FetchCoinHistoricData(id, interval, days = 7, currency = 'usd') {
    try {
        const response = await AxiosIncetance.get(`/coins/${id.coinId}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`);
        
        return response.data;

    } catch(error) {
      console.error(error);
        return null;
    }
}


