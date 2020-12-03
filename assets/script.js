var timeEl = document.querySelector("#timeToday");
//var timePlace = document.querySelector('#timeHolder');
var hourIdCounter = 0;

// date displayed at top of page
var setTimeDate = function () {
  dateTime = luxon.DateTime.local();
  var dateMonth = { weekday: "long", month: "long", day: "2-digit" };
  timeEl.textContent = dateTime.toLocaleString(dateMonth);
};

// create time blocks
var createTimeBlocks = function () {
  // time aray
  var hourArray = [
    "5:00 AM",
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];
  // create ul element
  var timeBlockEl = $("<ul></ul>");
  // append ul
  $("div").append(timeBlockEl);

  // cycle through each hour in array and creat li element appended to
  //for(var i = 0; i < hourArray.length; i++) {
  $.each(hourArray, function (index, value) {
    var timeBlockHour = $("<li>")
    //.addClass("hour").text(hourArray[index]);
    $(timeBlockEl).append(timeBlockHour);

    var taskRow = $('<div>').addClass('row hour')
    $(timeBlockHour).append(taskRow);
    

    var taskTime = $('<div>').addClass('col').text(hourArray[index]);
    $(taskRow).append(taskTime);

    var taskText = $('<div> <input type="text" class="textarea" </div>').addClass('col');
    $(taskRow).append(taskText);
  
    // hourIdCounter++;
  });
};

setTimeDate();
createTimeBlocks();
