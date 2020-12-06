var timeEl = document.querySelector("#timeToday");
//var timePlace = document.querySelector('#timeHolder');

var list = JSON.parse(localStorage.getItem("saveTextList")) || [];

// date displayed at top of page
var setTimeDate = function () {
  dateTime = luxon.DateTime.local();
  var dateMonth = { weekday: "long", month: "long", day: "2-digit" };
  timeEl.textContent = dateTime.toLocaleString(dateMonth);
};
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
  "23",
];
// create time blocks
var createTimeBlocks = function () {
  // time aray
  $("#timeHolder").remove();

  // creates new timeholder div to clear out old information to stop repeating bug.
  var createNewHolder = $("<div>")
    .attr("id", "timeHolder")
    .addClass("container");
  $("body").append(createNewHolder);

  $.each(hourArray, function (index, value) {
    var taskRow = $("<div>").addClass("row");
    $(createNewHolder).append(taskRow);

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
    //edit from
    if (dateTime.hour > hourArray[index]) {
      var taskText = $('<input type="text" class="textarea">')
        .attr("id", "textId" + hourArray[index])
        .addClass("col-10 past anchors");
      $(taskText).val(list[index]);

      $(taskRow).append(taskText);
      // save button
      var saveTaskBtn = $("<button onclick='saveFullText();'>")
        .attr("id", "saveButtonTask" + hourArray[index])
        .addClass("col-1 fa fa-save saveBtn");
      $(taskRow).append(saveTaskBtn);

      // need to add text into text input
    } else if (dateTime.hour < hourArray[index]) {
      var taskText = $('<input type="text" class="textarea">')
        .attr("id", "textId" + hourArray[index])
        .addClass("col-10 future anchors");
      $(taskText).val(list[index]);
      $(taskRow).append(taskText);

      // save button
      var saveTaskBtn = $("<button onclick='saveFullText();'>")
        .attr("id", "saveButtonTask" + hourArray[index])
        .addClass("col-1 fa fa-save saveBtn");
      $(taskRow).append(saveTaskBtn);
    } else if ((dateTime.hour = hourArray[index])) {
      var taskText = $('<input type="text" class="textarea">')
        .attr("id", "textId" + hourArray[index])
        .addClass("col-10 present anchors");
      $(taskText).val(list[index]);
      $(taskRow).append(taskText);
      // save button
      var saveTaskBtn = $("<button onclick='saveFullText();'>")
        .attr("id", "saveButtonTask" + hourArray[index])
        .addClass("col-1 fa fa-save saveBtn");
      $(taskRow).append(saveTaskBtn);
    }
  });
};

// time function and creation task function initaiate
setTimeDate();
createTimeBlocks();

var saveFullText = function () {
  list = [];
  $.each(hourArray, function (index, value) {
    // get elements id
    var textAnchor = document.getElementsByClassName("anchors")[index].id;

    var textBoxValue = $("#" + textAnchor)
      .val()
      .trim();
    list.push(textBoxValue);
  });
  localStorage.setItem("saveTextList", JSON.stringify(list));
};

// updates page every 5 minutes
setInterval(function () {
  createTimeBlocks();
}, 5 * 60 * 1000);
