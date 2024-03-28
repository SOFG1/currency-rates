import React, { useState } from "react"
import styled from "styled-components"
import SelectCurrencyComponent from "../components/SelectCurrencyComponent"
import { CurrencyType, DatesType } from "../types"
import SelectDatesComponent from "../components/SelectDatesComponent"


const StyledWrapper = styled.div`
    padding: 50px;
    display: flex;
`

const StyledColumn = styled.div`
    
`



const CurrenciesView = React.memo(() => {
    const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>("eur")
    const [selectedDate, setSelectedDate] = useState<DatesType>({startDate: "", endDate: ""})
    const [requestsCount, setRequestsCount] = useState<number>(0)

    return <StyledWrapper>
        <StyledColumn>
            <SelectCurrencyComponent selected={selectedCurrency} onSelect={setSelectedCurrency} />
            <SelectDatesComponent selected={selectedDate} onChange={setSelectedDate} />
            <p>Число запросов к API: {requestsCount}</p>
        </StyledColumn>
    </StyledWrapper>
})


export default CurrenciesView