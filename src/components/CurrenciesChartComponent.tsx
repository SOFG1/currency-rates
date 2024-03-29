import React, { useMemo } from "react"
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { CurrenciesDataType, CurrencyType } from "../types";
import styled from "styled-components";

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Filler,
    Tooltip
);

const colorsChart = [
    '#21d593',
    '#FF5530',
    '#133D48',
];


const StyledChart = styled(Chart)`
    flex-grow: 1;
    max-width: 50%;
    background-color: #fff;
    padding: 20px;
    border-radius: 30px;
    box-shadow: 5px 5px 15px #0000004c;
  `

interface IProps {
    data: CurrenciesDataType
    selectedCurrencies: CurrencyType[]
}

const CurrenciesChartComponent = React.memo(({ data, selectedCurrencies }: IProps) => {

    const labels = useMemo(() => {
        return Object.keys(data)
    }, [data])

    const datasets = useMemo(() => {
        return selectedCurrencies.map((label: any, index: number) => {
            return {
                type: "line" as const,
                label,
                data: Object.values(data).map((d: any) => d[label]),
                borderWidth: 1,
                backgroundColor: colorsChart[index],
            }
        })
    }, [data, selectedCurrencies])

    console.log(datasets)


    return <StyledChart
        type="bar"
        data={{
            labels,
            datasets
        }}
        options={{
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }}
    />

})

export default CurrenciesChartComponent