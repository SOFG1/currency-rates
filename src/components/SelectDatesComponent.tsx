import React, { useCallback } from "react"
import styled from "styled-components"
import { DatesType } from "../types"


const StyledWrapper = styled.div`
    margin-bottom: 40px;
`

const StyledBox = styled.div`
    display: flex;
    gap: 5px;
    margin-bottom: 15px;
`

interface IProps {
    selected: DatesType
    onChange: (v: DatesType) => void
}

const SelectDatesComponent = React.memo(({selected, onChange}: IProps) => {

    const handleChange = useCallback((value: string, prop: "startDate" | "endDate") => {
        onChange({...selected, [prop]: value})
    }, [selected])

    return <StyledWrapper>
        <StyledBox>
            <label htmlFor="start-date">Дата с</label>
            <input type="date" id="start-date" value={selected.startDate} onChange={(e) => handleChange(e.target.value, "startDate")} />
        </StyledBox>
        <StyledBox>
            <label htmlFor="end-date">Дата по</label>
            <input type="date" id="end-date" value={selected.endDate} onChange={(e) => handleChange(e.target.value, "endDate")} />
        </StyledBox>
    </StyledWrapper>
})

export default SelectDatesComponent