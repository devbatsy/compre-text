const days = [
    "monday",
    "Tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
]

const months = [
    "january",
    "febuary",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
]

const getDate = () =>{
    const date = new Date();

    const day = days[date.getDay() - 1];
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const minute = date.getMinutes();
    let hour = date.getHours();

    const meridiem = hour >= 12 ? 'pm' : "am";

    hour = hour === 0 ? 12 : (hour === 24 ? 12 : hour);

    const dateString = `${day} ${hour} : ${minute} ${meridiem.toUpperCase()}`

    return{
        dateParams:[date.getDay() , date.getMonth() , year],
        dateString:dateString
    }

}

module.exports = {
    getDate:getDate
}