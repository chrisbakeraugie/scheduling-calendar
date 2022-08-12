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

export const DAY_DROPDOWN_OPTIONS = () => {
    let arr = [];
    DAYS_OF_WEEK.forEach(day => {
        arr.push({ label: day, value: day })
    })
    return arr;
}

export const TIME_DROPDOWN_OPTIONS = () => {
    let arr = [];
    for (let i = 0; i <= 23; i++) {
        if (i === 0) {
            arr.push({ label: "12 AM", value: i })
        } else if (i === 12) {
            arr.push({ label: "12 PM", value: i })
        } else if (i < 12) {
            arr.push({ label: i + " AM", value: i })
        } else {
            arr.push({ label: (i - 12) + " PM", value: i })
        }
    }
    return arr;
}

export const numberToTime = (number) => {
    if (number === 0) {
        return "12 AM"
    }
    if (number === 12) {
        return "12 PM"
    }
    if (number > 0 && number < 12) {
        return number + " AM"
    }
    if (number > 12) {
        return (number - 12) + " PM"
    }
}