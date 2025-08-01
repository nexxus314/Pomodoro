//alright,imma add references from the index.html file
const timerDisplay =document.getElementById("timerdisplay");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const WorkBtn = document.getElementById("Work-btn");
const BreakBtn = document.getElementById("Break-btn");


//initail setup
let minutes =25;
let seconds=0;
let timerInterval; //this is whats gonna store the interval ID
let currentMode ='Work'//can be work or break


function updateDisplay(){
    /*so what we're doing here is basically updating the timer display and also the logic behind it is, in case the digit is less than 10,
    we are gonna add a zero before that digit, for example, if its 5, its gonna be 00:05 and not 00:5, and if its 10 or above, we display it as it is.*/

    const displayMinutes = minutes<10? '0' + minutes : minutes ;
    const displaySeconds = seconds<10? '0'+ seconds : seconds;//this is an if else thing, ? means if the first statement is true and : means if the first one is false
    timerDisplay.textContent=`${displayMinutes}:${displaySeconds}`; //this is the template literal, it allows us to use variables inside a string
}
// Call updateDisplay once to set the initial 25:00 on load
updateDisplay();

//function to start the timer
function startTimer(){
    console.log('Timer Started!!');
    // prevents multiple intervals if it has started already
    if (timerInterval) { 
        clearInterval(timerInterval);
    } //this is to clear the previous interval if it exists
     timerInterval= setInterval(() => {
        if(seconds ===0){
            if(minutes===0){
                //the timer is finished, alert the user 
                console.log('Time is Up!!');
                clearInterval(timerInterval); //stop the timer



                if (currentMode === 'Work') {
                    alert('Work session is completed! Time for a break!');


                    setMode('Break'); // Switch to Break mode
                }else if(currentMode === 'Break'){
                    alert('Break session is completed! time to get back to work!!');
                    setMode('Work'); // Switch to Work mode
                }
                //now we will add the logic to swithc modes like breaks and timer here
                return;
            }
            minutes--; //decrease the minutes
            seconds=59; //reset seconds to 59
        }else{
            seconds--; //decrease the seconds
        }
        //update the display after every second
        updateDisplay();
        }, 1000); // update every 1 second (1000 milliseconds)
}
// Function to stop the timer (added this missing function)
function stopTimer() {
    console.log('Timer stopped!');
    clearInterval(timerInterval); // Stop the interval
    timerInterval = null; // Clear the interval ID to allow starting fresh
    setMode(currentMode); // Reset to the current mode's initial time
}

//alright now the function to reset the timer for each modes
function setMode(mode){
    //this function will set the mode to work or break and reset the timer accordingly
    currentMode=mode;
    if (mode === 'Work') {
        minutes = 25;
        
    } else if (mode === 'Break') {
        minutes = 5;
    }
    seconds = 0;
    updateDisplay();
    console.log(`Switched to ${mode} mode`);
        
}
// Add Event Listeners
// Add Event Listeners
startBtn.addEventListener('click', startTimer); 
stopBtn.addEventListener('click', stopTimer); 

WorkBtn.addEventListener('click', () => setMode('Work'));
BreakBtn.addEventListener('click', () => setMode('Break')); 
