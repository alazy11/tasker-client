

const isTwoNumber = (date)=> {
    return (date/10) > 0 ? date : '0'+date;
}

const handleDateFormat = ()=> {

    const date = new Date();

    return `${date.getFullYear()}-${isTwoNumber(date.getMonth())}-${isTwoNumber(date.getDate())} ${isTwoNumber(date.getHours())}:${isTwoNumber(date.getMinutes())}:${isTwoNumber(date.getSeconds())}`

}

export default handleDateFormat;