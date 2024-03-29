import React, { useEffect, useState } from "react"
import styled from "styled-components"
import SelectCurrencyComponent from "../components/SelectCurrencyComponent"
import { CurrenciesDataType, CurrencyType, DatesType } from "../types"
import SelectDatesComponent from "../components/SelectDatesComponent"
import { getFormatDate } from "../utils/getFormatedDate"
import { CurrenciesApi } from "../api/api"
import { getDatesFromRange } from "../utils/getDatesFromRange"
import CurrenciesChartComponent from "../components/CurrenciesChartComponent"


const StyledWrapper = styled.div`
    padding: 50px;
    display: flex;
    gap: 50px;
`

const StyledColumn = styled.div`
    
`

const weekInMilliseconds = 6.048e+8

const getInitialDate = (): DatesType => {
    const currentDate = new Date
    const startDateInMS = currentDate.getTime() - weekInMilliseconds
    const startDate = getFormatDate(new Date(startDateInMS))
    return {
        startDate,
        endDate: getFormatDate(currentDate)
    }

}




const CurrenciesView = React.memo(() => {
    const [selectedCurrencies, setSelectedCurrencies] = useState<CurrencyType[]>([])
    const [selectedDate, setSelectedDate] = useState<DatesType>(getInitialDate)
    const [data, setData] = useState<CurrenciesDataType>({})
    const [requestsCount, setRequestsCount] = useState<number>(0)
    const [isFetching, setIsFetching] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)


    const handleFetchData = async () => {
        const datesList = getDatesFromRange(selectedDate.startDate, selectedDate.endDate)
        const chartData: any = {}


        for (const date of datesList) {
            if (data[date]) continue //Prevent repeating fetching (Caching)
            try {
                setIsFetching(true)
                const data = await CurrenciesApi.getRubCurrencies(date)
                setRequestsCount(p => p + 1)
                setIsFetching(false)
                chartData[date] = {
                    eur: 1 / data?.data?.rub?.eur,
                    usd: 1 /data?.data?.rub?.usd,
                    cny: 1 / data?.data?.rub?.cny,
                }
            } catch (e) {
                setError(true)
                setIsFetching(false)
                return
            }
        }
        setData(p => ({ ...p, ...chartData }))
    }



    useEffect(() => {
        handleFetchData()
    }, [selectedDate])

    useEffect(() => {
        setError(false)
    }, [selectedDate])


    return <>
        <StyledWrapper>
            <StyledColumn>
                <SelectCurrencyComponent selected={selectedCurrencies} onSelect={setSelectedCurrencies} />
                <SelectDatesComponent selected={selectedDate} onChange={setSelectedDate} />
                <p>Число запросов к API: {requestsCount}</p>
            </StyledColumn>
            <CurrenciesChartComponent data={data} selectedCurrencies={selectedCurrencies} />
        </StyledWrapper>
        {isFetching && <p>Loading...</p>}
        {error && <p>Error occured!</p>}
    </>
})


export default CurrenciesView