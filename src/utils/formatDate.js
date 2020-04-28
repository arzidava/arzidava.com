const s = (month) => {
    switch(month) {
        case '01': return 'January';
        case '02': return 'February';
        case '03': return 'March';
        case '04': return 'April';
        case '05': return 'May';
        case '06': return 'June';
        case '07': return 'July';
        case '08': return 'August';
        case '09': return 'September';
        case '10': return 'October';
        case '11': return 'November';
        case '12': return 'December';
    }
}

export default function(date) {
    const sdate = date.toString()
    const year = sdate.substr(0,4)
    const month = sdate.substr(4,2)
    const day = sdate.substr(6,2)

    return `${s(month)} ${parseInt(day)}, ${year}`
}
