import React, { useState } from "react"
import styled from "styled-components"
import SelectCurrencyComponent from "../components/SelectCurrencyComponent"
import { CurrencyType, DatesType } from "../types"
import SelectDatesComponent from "../components/SelectDatesComponent"
import { getFormatDate } from "../utils/getFormatedDate"


const StyledWrapper = styled.div`
    padding: 50px;
    display: flex;
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
    const [requestsCount, setRequestsCount] = useState<number>(0)


    return <StyledWrapper>
        <StyledColumn>
            <SelectCurrencyComponent selected={selectedCurrencies} onSelect={setSelectedCurrencies} />
            <SelectDatesComponent selected={selectedDate} onChange={setSelectedDate} />
            <p>Число запросов к API: {requestsCount}</p>
        </StyledColumn>
    </StyledWrapper>
})


export default CurrenciesView