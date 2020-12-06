var timeEl = document.querySelector("#timeToday");
//var timePlace = document.querySelector('#timeHolder');
var hourIdCounter = 0;

var list = JSON.parse(localStorage.getItem("saveTextList")) || [];
console.log(list)

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
  $('#timeHolder').remove()

  
console.log(list)
  // create ul element
  // var timeBlockEl = $("<ul></ul>");
  // append ul
  // $("div").append(timeBlockEl);
    var createNewHolder = $("<div>").attr('id', 'timeHolder').addClass('container')
    $('body').append(createNewHolder)
  // cycle through each hour in array and creat li element appended to
  //for(var i = 0; i < hourArray.length; i++) {
  $.each(hourArray, function (index, value) {
    // var timeBlockHour = $("<li>");
    //.addClass("hour").text(hourArray[index]);
    // $(timeBlockEl).append(timeBlockHour);

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
        $(taskText).val(list[index])
        
      $(taskRow).append(taskText);
      // save button
      var saveTaskBtn = $("<button onclick='saveFullText();'>")
        .attr("id", "saveButtonTask" + hourArray[index])
        .addClass("col-1 fa fa-save saveBtn");
      $(taskRow).append(saveTaskBtn);
      //$(taskText).append('<p>')
      // need to add text into text input
    } else if (dateTime.hour < hourArray[index]) {
      var taskText = $('<input type="text" class="textarea">')
        .attr("id", "textId" + hourArray[index])
        .addClass("col-10 future anchors");
        $(taskText).val(list[index])
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
        $(taskText).val(list[index])
      $(taskRow).append(taskText);
      // save button
      var saveTaskBtn = $("<button onclick='saveFullText();'>")
        .attr("id", "saveButtonTask" + hourArray[index])
        .addClass("col-1 fa fa-save saveBtn");
      $(taskRow).append(saveTaskBtn);
      // hourIdCounter++;
    }

    // add ave btn icon
    //var saveTaskBtn = $("<button>").attr('id', 'saveButtonTask' + hourArray[index]).addClass("col-1 fa fa-save saveBtn");
    //$(taskRow).append(saveTaskBtn);
  });
};

setTimeDate();
createTimeBlocks();

//create function for click event on save button saveTastBtn
//  document.getElementById('saveButtonTask').addEventListener('click', function (){
//     console.log('made it')
//  });

var saveFullText = function () {
  console.log("test");
 list = [];
  $.each(hourArray, function (index, value) {
    var textAnchor = document.getElementsByClassName("anchors")[index].id;
    //console.log(textAnchor)

    //  //var textBoxValue = $(this).closest('button').attr('id')
    var textBoxValue = $("#" + textAnchor)
      .val()
      .trim();
    console.log(textBoxValue);

    //  //.trim()
    list.push(textBoxValue);
    console.log(list);
    
  });
  localStorage.setItem('saveTextList', JSON.stringify(list))
};

setInterval(function(){createTimeBlocks();}, 5 * 60 * 1000 )

//for ( var i = 0); i

// $.each(hourArray, function (index, value) {
// //for (i = 0; i < hourArray.length; i++) {
//  $('#saveButtonTask' + hourArray[index]).on('click', function(event) {
//   event.preventDefault();
//   console.log('2+2')

//  //var textBoxValue = $(this).closest('button').attr('id')
//  var textBoxValue = $(this).parent('input')
//  .val()
//  //.trim()
// console.log(textBoxValue)
//  list.push(textBoxValue);

//  localStorage.setItem('saveTextList', JSON.stringify(list))
// });})

// // update createTimeBlocks function with local storage var
// localStorage.setItem('saveTextList')
// // save the
// // add the var to local storage
// //array.push(var)
// // get value .val() .trim() from text box <input type="text" class="textarea col-10 past">

//use set interval to update colors
