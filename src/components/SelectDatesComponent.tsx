import React, { useCallback, useMemo } from "react"
import styled from "styled-components"
import { DatesType } from "../types"
import { getFormatDate } from "../utils/getFormatedDate"
import { dayInMS } from "../constants"


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


    //We've restricted up to 28 days, because API provides data for the last 28 days only
    const minDate = useMemo(() => {
        const dateInMS = new Date().getTime() - 28 * dayInMS
        return getFormatDate(new Date(dateInMS))
    }, [])


    const maxDate = useMemo(() => {
        return getFormatDate(new Date())
    }, [])




    return <StyledWrapper>
        <StyledBox>
            <label htmlFor="start-date">Дата с</label>
            <input type="date" min={minDate} max={maxDate} id="start-date" value={selected.startDate} onChange={(e) => handleChange(e.target.value, "startDate")} />
        </StyledBox>
        <StyledBox>
            <label htmlFor="end-date">Дата по</label>
            <input type="date" min={minDate} max={maxDate} id="end-date" value={selected.endDate} onChange={(e) => handleChange(e.target.value, "endDate")} />
        </StyledBox>
    </StyledWrapper>
})

export default SelectDatesComponent