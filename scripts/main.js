

const targetDate = new Date(2023, 6, 14, 9, 30);

console.log(targetDate);

setInterval(dateDifference, 1000);

function dateDifference() {

    const currentDate = new Date();

    console.log(currentDate);

    timeToLesson = targetDate - currentDate;

    const daysLeft = Math.floor(timeToLesson / (24*60*60*1000));

    const daysLeftMs = timeToLesson % (24*60*60*1000);

    const hoursLeft =  Math.floor(daysLeftMs / (60*60*1000));

    const hoursLeftMs =  timeToLesson % (60*60*1000);

    const minutesLeft =   Math.floor(hoursLeftMs / (60*1000));

    const minutesLeftMs =   timeToLesson % (60*1000);

    const secondsLeft =    Math.floor(minutesLeftMs / 1000);

    const formattedTimeToLesson = daysLeft + ":" + hoursLeft  + ":" + minutesLeft + ":" + secondsLeft;

    console.log(formattedTimeToLesson);

    return formattedTimeToLesson;

}


