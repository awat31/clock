// Set the date we're counting down to
var countDownDate = new Date("Oct 12, 2028 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

//**DEV ENTRY-------------------------------------------------
  //var now = 1670781540000
//**END DEV ENTRIES------------------------------------------

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

//**DEV ENTRIES--------------------------------------------------------
  //document.getElementById("distance").innerHTML = distance

  //var rightnow = now;
  //document.getElementById("now").innerHTML = now

  //var duedate = countDownDate;
  //document.getElementById("duedate").innerHTML = countDownDate

//**END DEV----------------------------------------------------------

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s";

// If time is passed within 24 hours then only print hours
  if (distance < 86400000) {

    document.getElementById("countdown").innerHTML = hours + "h " + minutes + "m " + seconds + "s";
  }

// If time is within 1 hour then only print minutes
  if (distance < 3600000) {

    document.getElementById("countdown").innerHTML = minutes + "m " + seconds + "s";
  }

// If time is within 1 minute then only print seconds
  if (distance < 60000) {
    document.getElementById("countdown").innerHTML = seconds + "s";
  }

// If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Time is up.";
  }
}, 1000);
