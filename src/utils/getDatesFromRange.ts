import { dayInMS } from "../constants"
import { getFormatDate } from "./getFormatedDate"



export const getDatesFromRange = (startDate: string, endDate: string): string[] => {
    const endInMS = new Date(endDate).getTime()
    const startInMS = new Date(startDate).getTime()
    const list = []

    let current = endInMS

    while(current > startInMS) {
        const formated = getFormatDate(new Date(current))
        list.push(formated)
        current-=dayInMS
    }

    return list
}