const AddDateSuffix = (Date) => {
    let DateString = Date.toString();

    // Get Last Character Of Date String
    const LastChar = DateString.charAt(DateString.length - 1);

    if (LastChar === '1' && DateString !== '11') {
        DateString = `${DateString}st`;
    } else if (LastChar === '2' && DateString !== '12') {
        DateString = `${DateString}nd`;
    } else if (LastChar === '3' && DateString !== '13') {
        DateString = `${DateString}rd`;
    } else {
        DateString = `${DateString}th`;
    }

    return DateString;
};

// Format A Timestamp, Accepts Timestamp And An `Option` Object As Parameters
module.exports = (
    Timestamp,
    { MonthLength = 'Short', DateSuffix = true } = {}
) => {
    const Months = {
        0: MonthLength === 'Short' ? 'Jan' : 'January',
        1: MonthLength === 'Short' ? 'Feb' : 'February',
        2: MonthLength === 'Short' ? 'Mar' : 'March',
        3: MonthLength === 'Short' ? 'Apr' : 'April',
        4: MonthLength === 'Short' ? 'May' : 'May',
        5: MonthLength === 'Short' ? 'Jun' : 'June',
        6: MonthLength === 'Short' ? 'Jul' : 'July',
        7: MonthLength === 'Short' ? 'Aug' : 'August',
        8: MonthLength === 'Short' ? 'Sep' : 'September',
        9: MonthLength === 'Short' ? 'Oct' : 'October',
        10: MonthLength === 'Short' ? 'Nov' : 'November',
        11: MonthLength === 'Short' ? 'Dec' : 'December',
    };

    const DateObject = new Date(Timestamp);
    const FormattedMonth = Months[DateObject.getMonth()];

    const DayOfMonth = DateSuffix
        ? AddDateSuffix(DateObject.getDate())
        : DateObject.getDate();
    
    const Year = DateObject.getFullYear();
    let Hour = 
        DateObject.getHours() > 12
            ? Math.floor(DateObject.getHours() - 12)
            : DateObject.getHours();

    // If Hour Is 0 (12:00 AM), Change It To 12
    if (Hour === 0) {
        Hour = 12;
    }

    const Minutes = (DateObject.getMinutes() < 10 ? '0' : '') + DateObject.getMinutes();

    // Set `AM` Or `PM`
    const PeriodOfDay = DateObject.getHours() >= 12 ? 'PM' : 'AM';

    const FormattedTimestamp = `${FormattedMonth} ${DayOfMonth}, ${Year} at ${Hour}:${Minutes} ${PeriodOfDay}`;

    return FormattedTimestamp;
};