function pomodoro() {
        let minutes = 25; // Set the minutes
        let seconds = 0;  // Set the seconds
        let formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; // Format as MM:SS
        document.getElementById("time").innerHTML = formattedTime; // Display the formatted time
        document.getElementById("text").innerHTML = "Time to Work!✊";
        console.log(formattedTime); // Log the formatted time
} 

function short() {
    document.getElementById("time").innerHTML.style.backgroundColor = "green";
    document.getElementById("time").innerHTML = "5:00";
    document.getElementById("text").innerHTML="Time to Rest!😌"
}

function long() {
    document.getElementById("time").innerHTML.style.backgroundColor = "green";
    document.getElementById("time").innerHTML = "15:00";
    document.getElementById("text").innerHTML="Time to Rest!😌"
}
