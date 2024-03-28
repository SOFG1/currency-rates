import React, { useState } from "react"
import styled from "styled-components"
import SelectCurrencyComponent from "../components/SelectCurrencyComponent"
import { CurrencyType } from "../types"


const StyledWrapper = styled.div`
    padding: 50px;
    display: flex;
`

const StyledColumn = styled.div`
    
`



const CurrenciesView = React.memo(() => {
    const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>("eur")
    const [startDate, setStartDate] = useState<Date>(new Date())
    const [endDate, setEndDate] = useState<Date>(new Date())
    const [requestsCount, setRequestsCount] = useState<number>(0)

    return <StyledWrapper>
        <StyledColumn>
            <SelectCurrencyComponent selected={selectedCurrency} onSelect={setSelectedCurrency} />
            <p>Число запросов к API: {requestsCount}</p>
        </StyledColumn>
    </StyledWrapper>
})


export default CurrenciesView