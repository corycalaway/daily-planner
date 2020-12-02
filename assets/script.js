
var timeEl = document.querySelector("#timeToday")

// date displayed at top of page
var setTimeDate = function () {
   dateTime = luxon.DateTime.local();
    var dateMonth = {weekday: 'long', month: 'long', day: '2-digit'};
    timeEl.textContent = dateTime.toLocaleString(dateMonth);
}

setTimeDate();


