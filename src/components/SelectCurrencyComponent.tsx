import React, { useCallback } from "react"
import styled from "styled-components"
import { CurrencyType } from "../types"


const StyledWrapper = styled.div`
    margin-bottom: 40px;
`

const StyledBox = styled.div`
    display: flex;
    gap: 5px;
    margin-bottom: 15px;
`

interface IProps {
    selected: CurrencyType[]
    onSelect: (type: CurrencyType[]) => void
}

const SelectCurrencyComponent = React.memo(({ selected, onSelect }: IProps) => {

    const handleChange = useCallback((currency: CurrencyType) => {
        if (selected.includes(currency)) onSelect(selected.filter(c => c !== currency))
        if (!selected.includes(currency)) onSelect([...selected, currency])
    }, [selected])



    return <StyledWrapper>
        <StyledBox>
            <input type="checkbox" id="eur" checked={selected.includes("eur")} onChange={() => handleChange("eur")} />
            <label htmlFor="eur">EUR</label>
        </StyledBox>
        <StyledBox>
            <input type="checkbox" id="usd" checked={selected.includes("usd")} onChange={() => handleChange("usd")} />
            <label htmlFor="usd">USD</label>
        </StyledBox>
        <StyledBox>
            <input type="checkbox" id="cny" checked={selected.includes("cny")} onChange={() => handleChange("cny")} />
            <label htmlFor="cny">CNY</label>
        </StyledBox>
    </StyledWrapper>
})


export default SelectCurrencyComponent