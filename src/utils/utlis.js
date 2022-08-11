export const DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const DEFAULT_AVAILABILITY = () => {
    let arr = [];
    for (let i = 0; i < DAYS_OF_WEEK.length; i++) {
        arr.push({
            day: DAYS_OF_WEEK[i],
            start: 9,
            end: 17
        })
    }
    return arr;
}