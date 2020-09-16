module.exports = (time) => {

    const time = String;
    const [hour, minutes] = time.split(':').map(Number);
    const timeToMinutes = (hour * 60) + minutes;

    return timeToMinutes;
}