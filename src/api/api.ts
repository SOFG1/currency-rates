import axios, { AxiosInstance } from "axios";



export const API_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0";


const axiosInstance: AxiosInstance = axios.create({
    baseURL: API_URL,
});

export const CurrenciesApi = {
    getRubCurrencies: async (date: string) => {
        return await axiosInstance.get(`/currency-api@${date}/v1/currencies/rub.min.json`);
    },
};