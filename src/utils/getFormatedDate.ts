
const addZeroForward = (string: string, needLength: number = 2) => {
    return `${"0".repeat(needLength - string.length)}${string}`;
  };


export const getFormatDate = (date: Date) => {
    const days = date.getDate().toString();
    const month = (date.getMonth() + 1).toString();
    const years = date.getFullYear();
    return `${years}-${addZeroForward(month)}-${addZeroForward(days)}`;
};