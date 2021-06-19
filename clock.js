var hourSpan = document.getElementsByClassName('hour')[0];
var minuteSpan = document.getElementsByClassName('minute')[0];
var meridiemSpan = document.getElementsByClassName('meridiem')[0];
var daySpan = document.getElementsByClassName('day')[0];
var dateSpan = document.getElementsByClassName('date')[0];
var monthSpan = document.getElementsByClassName('month')[0];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const getDateAndTime = (moment) => {
    let day = days[moment.getDay()];
    let date = moment.getDate();
    let month = months[moment.getMonth()];

    let unformattedHour = moment.getHours();
    let hour = unformattedHour > 12 ? (unformattedHour - 12) : unformattedHour;
    let unformattedMinute = moment.getMinutes();
    let minute = unformattedMinute.toString().length < 2 ? ("0" + unformattedMinute) : unformattedMinute;
    let meridiem = unformattedHour >= 12 ? "pm" : "am";

    hourSpan.innerText = hour;
    minuteSpan.innerText = minute;
    meridiemSpan.innerText = meridiem;
    daySpan.innerText = day;
    dateSpan.innerText = date;
    monthSpan.innerText = month;
}

getDateAndTime(new Date());

window.setInterval(() => {
    getDateAndTime(new Date());
}, 1000);