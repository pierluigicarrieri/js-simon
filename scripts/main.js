//Sets the target date to countdown from.
const targetDate = new Date(2023, 6, 14, 9, 30);

//Variable for html element where to display the time left
const timeLeftElement = document.getElementById("time_left");

//Views in console "targetDate".
console.log(targetDate);

//SetInterval function calls dateDifference function as argument.
setInterval(dateDifference, 100);

/**
 * Calculates the time difference between present time and "targetDate".
 */
function dateDifference() {

    //Creates a new Date object with the day of now.
    const currentDate = new Date();

    //Time difference between dates in milliseconds.
    timeToLesson = targetDate - currentDate;

    /* Next instructions convert the time left in a d:h:m:s format, 
    step by step. 
    Integer division ("timeToLesson" / ms in a day) for "daysLeft", 
    then module operator ("timeToLesson" / ms in a day) for "daysLeftRm" 
    to calculate "hoursLeft", rinse and repeat till "secondsLeft". */
    let daysLeft = Math.floor(timeToLesson / (24*60*60*1000));

    const daysLeftRm = timeToLesson % (24*60*60*1000);

    let hoursLeft = Math.floor(daysLeftRm / (60*60*1000));

    const hoursLeftRm = timeToLesson % (60*60*1000);

    let minutesLeft = Math.floor(hoursLeftRm / (60*1000));

    const minutesLeftRm = timeToLesson % (60*1000);

    let secondsLeft = Math.floor(minutesLeftRm / 1000);

    //"If" construct added, puts time to 0 if the target date has passed.
    if (targetDate - currentDate <= 0) {

        daysLeft = 0;
        hoursLeft = 0;
        minutesLeft = 0;
        secondsLeft = 0;

    }

    //Creates a variable formatting the total time left (d:h:m:s).
    const formattedTimeToLesson = `${daysLeft}:${hoursLeft}:${minutesLeft}:${secondsLeft}`;

    //Views in console "formattedTimeToLesson".
    console.log(formattedTimeToLesson);

    //Fills "timeLeftElement" with "formattedTimeToLesson".
    timeLeftElement.innerHTML = formattedTimeToLesson;

}


