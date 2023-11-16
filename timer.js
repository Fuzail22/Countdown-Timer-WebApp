var x = new Audio("time_up_s7.mp3");
function playAudio() {
  x.play();
}
function pauseAudio() {
  x.pause();
}
function dateDiff() {
  let SelectedDateTime = document.getElementById("dateTime").value;
  if (!SelectedDateTime) {
    console.log("Time not selected");
    return;
  }
  console.log("selection is " + SelectedDateTime);
  const inter = setInterval(() => {
    let currentDate = new Date();
    let timerDate = new Date(SelectedDateTime); //converts string to date type
    let diff = timerDate.getTime() - currentDate.getTime(); //returns diff in milliseconds

    if (diff < 1000) {
      playAudio();
      clearInterval(inter);
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / 1000 / (60 * 60));
    let mins = Math.floor((diff % (1000 * 60 * 60)) / 1000 / 60);
    let secs = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("secs").innerHTML = secs;
  });
}
