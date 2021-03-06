const formatDate = (dateString) => {
    if (!dateString) {
        return
    }
    let date = new Date(dateString);
    return date.toLocaleString().split(" ")[0]
}

const toDashDate = (dateString, separator = "-") => {
    if (!dateString) {
        return
    }
    let date = new Date(dateString);
    let monthString = toPad2(date.getMonth() + 1);
    let dayString = toPad2(date.getDate());

    let formatted_date = `${date.getFullYear()}${separator}${monthString}${separator}${dayString}`;
    return formatted_date;
}

const DateIsBetween = (dateStringStart, dateStringEnd, dateStringSelf = new Date().toString()) => {
    let start = new Date(dateStringStart);
    let end = new Date(dateStringEnd);
    let self = new Date(dateStringSelf);
    return end > self && self > start;
}


const toTime = (dateString) => {
    if (!dateString) {
        return
    }
    let date = new Date(dateString);
    let Hour = toPad2(date.getHours());
    let Minute = toPad2(date.getMinutes());
    return `${Hour}:${Minute}`;
}

const toPad2 = (input) => {
    return String(input).padStart(2, 0);
}

export {
    formatDate,
    toDashDate,
    DateIsBetween,
    toTime,
}