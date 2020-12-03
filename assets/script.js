
var timeEl = document.querySelector("#timeToday");
//var timePlace = document.querySelector('#timeHolder');
var hourIdCounter = 0;


// date displayed at top of page
var setTimeDate = function () {
   dateTime = luxon.DateTime.local();
    var dateMonth = {weekday: 'long', month: 'long', day: '2-digit'};
    timeEl.textContent = dateTime.toLocaleString(dateMonth);
}

// create time blocks
var createTimeBlocks = function () {
    var hourArray = ['5:00 AM', '6:00 AM', '7:00 AM'];
  //  var timeBlockEl = $('<ul>');
    //var timeBlockEl = document.createElement('ul')
    var timeBlockEl = $('<ul></ul>')
    $('div').append(timeBlockEl);
    for(var i = 0; i < hourArray.length; i++) {
   // $.each(hourArray, function(index, value){
    
   
  var timeBlockHour = $('<li>').addClass('hour');
  $(timeBlockEl).append(timeBlockHour)
   // document.div.appendChild(timeBlockEl)
   // timeBlockEl = className = 'hour';
   // timeBlockHour.setAttribute('timeCardHour', hourIdCounter)
    
    timeBlockHour.textContent = hourArray[i];
  //  timeBlockEl.append(timeBlockHour);
    console.log(hourArray)
   // createTimeBlocks();
   // hourIdCounter++;
    
    }
};

setTimeDate();
createTimeBlocks();

