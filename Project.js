function pomodoro() {
    let minutes = 25; // Set the minutes
    let seconds = 0;  // Set the seconds
    let formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; // Format as MM:SS
    document.getElementById("time").innerHTML = formattedTime; // Display the formatted time
    document.getElementById("text").innerHTML = "Time to Work!✊";
    console.log(formattedTime); // Log the formatted time
} 

function short() {
    document.getElementById("time").style.transition= "1s";
    document.getElementById("time").style.backgroundColor = "#008080"; // Change background color to teal
    document.getElementsByClassName("time").innerHTML = "5:00";
    document.getElementsByClassName("time").innerHTML="Time to Rest!😌"
}

function long() {
    document.getElementById("time").style.transition= "1s";
    document.getElementById("time").style.backgroundColor = "#E89EB8"; // Change background color to magenta
    document.getElementsByClassName("time").innerHTML = "15:00";
    document.getElementsByClassName("time").innerHTML="Time to Rest!😌"
}

let isPomodoro = true; // Flag to track the current state

function togglePomodoro() {
    if (isPomodoro) {
        pomodoro(); // Call the pomodoro function
    }
    else if (isPomodoro === false) {
        document.getElementById("time").style.transition= "1s";
        short(); // Call the short function
    }
    else {
        document.getElementById("time").style.transition= "1s";
        long(); // Call the long function
    }
    // Toggle the flag to switch between states
    isPomodoro = !isPomodoro; // Toggle the flag
}


