//

const weekdays = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];

module.exports = {
    weekdays,
    getWeekday,
};



function getWeekday(dayNo) {
    if(dayNo < 0 || dayNo > 6) dayNo = 0;
    return weekdays[dayNo];
}

