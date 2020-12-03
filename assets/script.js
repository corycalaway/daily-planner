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
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
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
    
    if (hourArray[index] > 12) {
    var taskTime = $('<div>').addClass('col-1').text(hourArray[index] - 12 + "PM");
    $(taskRow).append(taskTime);
    }
    else if (hourArray[index] < 12) {
        var taskTime = $('<div>').addClass('col-1').text(hourArray[index] + "AM");
        $(taskRow).append(taskTime);
        }
    else if (hourArray[index] = 12) {
        var taskTime = $('<div>').addClass('col-1').text(hourArray[index] + "PM");
        $(taskRow).append(taskTime);
        }
    
    if (dateTime.hour > hourArray[index]) {
    var taskText = $('<input type="text" class="textarea">').addClass('col-10 past');
    $(taskRow).append(taskText);
    }
    // hourIdCounter++;
  });
};

setTimeDate();
createTimeBlocks();
