// Set the date we're counting down to
var countDownDate = new Date("Dec 11, 2022 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  //var rightnow = now;
  //document.getElementById("now").innerHTML = now

  //var duedate = countDownDate;
  //document.getElementById("duedate").innerHTML = countDownDate

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

// If time is passed 10/12/2022 18:00:00, (within 24 hours) then only print hours
  if (now > 1670695200000) {

    document.getElementById("countdown").innerHTML = hours + "h "
    + minutes + "m " + seconds + "s ";
  }

// If time is passed 11/12/2022 17:00:00, (within 1 hour) then only print hours
  if (now > 1670778000000) {

    document.getElementById("countdown").innerHTML = minutes + "m " + seconds + "s ";
  }

  if (now > 1670781540000) {

    document.getElementById("countdown").innerHTML = seconds + "s ";
  }

  // Display the result in the element with id="demo"




// If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "QIAN IS BACK!!";
  }
}, 1000);
