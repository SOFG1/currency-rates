export type CurrencyType = "eur" | "usd" | "cny"



export type DatesType = {
    startDate: string
    endDate: string
}



export type CurrenciesDataType = {
    [date: string]: {
        [key in CurrencyType]: string
    }
}