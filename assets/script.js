
var timeEl = document.querySelector("#timeToday")



var setTimeDate = function () {
    dateTime = luxon.DateTime.local();
    timeEl.textContent = dateTime;
}

setTimeDate();


