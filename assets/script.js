var timeEl = document.querySelector("#timeToday");
//var timePlace = document.querySelector('#timeHolder');
var hourIdCounter = 0;

 var list = JSON.parse(localStorage.getItem('saveTextList')) || [];

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
    "18",
    "19",
    "20",
    "21",
    "22",
  ];
  // create ul element
 // var timeBlockEl = $("<ul></ul>");
  // append ul
 // $("div").append(timeBlockEl);

  // cycle through each hour in array and creat li element appended to
  //for(var i = 0; i < hourArray.length; i++) {
  $.each(hourArray, function (index, value) {
   // var timeBlockHour = $("<li>");
    //.addClass("hour").text(hourArray[index]);
   // $(timeBlockEl).append(timeBlockHour);

    var taskRow = $("<div>").addClass("row");
    $('#timeHolder').append(taskRow);

    // creates time values with am/pm
    if (hourArray[index] > 12) {
      var taskTime = $("<div>")
        .addClass("col-1 hour")
        .text(hourArray[index] - 12 + "PM");
      $(taskRow).append(taskTime);
    } else if (hourArray[index] < 12) {
      var taskTime = $("<div>")
        .addClass("col-1 hour")
        .text(hourArray[index] + "AM");
      $(taskRow).append(taskTime);
    }
    // truthy statement
    else if ((hourArray[index] = 12)) {
      var taskTime = $("<div>")
        .addClass("col-1 hour")
        .text(hourArray[index] + "PM");
      $(taskRow).append(taskTime);
    }

    if (dateTime.hour > hourArray[index]) {
      var taskText = $('<input type="text" class="textarea">').attr('id', 'textId ' + hourArray[index]).addClass(
        "col-10 past"
      );
      $(taskRow).append(taskText);
    } else if (dateTime.hour < hourArray[index]) {
      var taskText = $('<input type="text" class="textarea">').attr('id', 'textId ' + hourArray[index]).addClass(
        "col-10 future"
      );
      $(taskRow).append(taskText);
    } else if ((dateTime.hour = hourArray[index])) {
      var taskText = $('<input type="text" class="textarea">').attr('id', 'textId ' + hourArray[index]).addClass(
        "col-10 present"
      );
      $(taskRow).append(taskText);
      // hourIdCounter++;
    }

    // add ave btn icon
    var saveTaskBtn = $("<button>").attr('id', 'saveButtonTask').addClass("col-1 fa fa-save saveBtn");
    $(taskRow).append(saveTaskBtn);
  });
};



//create function for click event on save button saveTastBtn
$('#saveButtonTask').on('click', function(event) {
 event.preventDefault();
// // get value .val() .trim() from text box <input type="text" class="textarea col-10 past">
var textBoxValue = ('textId ' + hourArray[index])
 .val()
 .trim();
// // add the var to local storage
// //array.push(var)
list.push(textBoxValue);
// // update createTimeBlocks function with local storage var
// localStorage.setItem('saveTextList')
// // save the 
localStorage.setItem(saveTextList)
 });
setTimeDate();
createTimeBlocks();



//use set interval to update colors