var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var startYear = 2021;
var endYear = 2023;
var month = 0;
var year = 0;
var selectedDays = new Array();
var mousedown = false;
var mousemove = false;

function loadCalendarMonths() {
    for (var i = 0; i < months.length; i++) {
        var doc = document.createElement("div");
        doc.innerHTML = months[i];
        doc.classList.add("dropdown-item");

        doc.onclick = (function () {
            var selectedMonth = i;
            return function () {
                month = selectedMonth;
                document.getElementById("curMonth").innerHTML = months[month];
                loadCalendarDays();
                return month;
            }
        })();

        document.getElementById("months").appendChild(doc);
    }
}

function loadCalendarYears() {
    document.getElementById("years").innerHTML = "";

    for (var i = startYear; i <= endYear; i++) {
        var doc = document.createElement("div");
        doc.innerHTML = i;
        doc.classList.add("dropdown-item");

        doc.onclick = (function () {
            var selectedYear = i;
            return function () {
                year = selectedYear;
                document.getElementById("curYear").innerHTML = year;
                loadCalendarDays();
                return year;
            }
        })();

        document.getElementById("years").appendChild(doc);
    }
}

function loadCalendarDays() {
    document.getElementById("calendarDays").innerHTML = "";

    var tmpDate = new Date(year, month, 0);
    var num = daysInMonth(month, year);
    var dayofweek = tmpDate.getDay(); 

    for (var i = 0; i <= dayofweek; i++) {
        var d = document.createElement("div");
        d.classList.add("day");
        d.classList.add("blank");
        document.getElementById("calendarDays").appendChild(d);
    }

    for (var i = 0; i < num; i++) {
        var tmp = i + 1;
        var d = document.createElement("div");
        d.id = "calendarday_" + tmp;
        d.className = "day";
        d.innerHTML = tmp;
        d.dataset.day = tmp;

        d.addEventListener('click', function(){
            this.classList.toggle('selected');

            if (!selectedDays.includes(this.dataset.day))
                selectedDays.push(this.dataset.day);

            else
                selectedDays.splice(selectedDays.indexOf(this.dataset.day), 1);
        });

        d.addEventListener('mousemove', function(e){
           e.preventDefault();
            if (mousedown)
            {
                this.classList.add('selected');

                if (!selectedDays.includes(this.dataset.day))
                    selectedDays.push(this.dataset.day);
            }
        });

        d.addEventListener('mousedown', function(e){
            e.preventDefault();
            mousedown = true;
        });
        
        d.addEventListener('mouseup', function(e){
            e.preventDefault();
            mousedown = false;
        });

        document.getElementById("calendarDays").appendChild(d);
    }

    var clear = document.createElement("div");
    clear.className = "clear";
    document.getElementById("calendarDays").appendChild(clear);
}

function daysInMonth(month, year)
{
    var d = new Date(year, month+1, 0);
    return d.getDate();
}

window.addEventListener('load', function () {
    var date = new Date();
    month = date.getMonth();
    year = date.getFullYear();
    document.getElementById("curMonth").innerHTML = months[month];
    document.getElementById("curYear").innerHTML = year;
    loadCalendarMonths();
    loadCalendarYears();
    loadCalendarDays();
});
 

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}