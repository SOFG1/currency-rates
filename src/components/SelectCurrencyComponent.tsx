import React from "react"
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
    selected: CurrencyType
    onSelect: (type: CurrencyType) => void
}

const SelectCurrencyComponent = React.memo(({selected, onSelect}: IProps) => {
    return <StyledWrapper>
        <StyledBox>
            <input type="checkbox" id="usd" checked={selected === "usd"} onChange={() => onSelect("usd")} />
            <label htmlFor="usd">USD</label>
        </StyledBox>
        <StyledBox>
            <input type="checkbox" id="eur" checked={selected === "eur"} onChange={() => onSelect("eur")} />
            <label htmlFor="eur">EUR</label>
        </StyledBox>
        <StyledBox>
            <input type="checkbox" id="cny" checked={selected === "cny"} onChange={() => onSelect("cny")} />
            <label htmlFor="cny">CNY</label>
        </StyledBox>
    </StyledWrapper>
})


export default SelectCurrencyComponent