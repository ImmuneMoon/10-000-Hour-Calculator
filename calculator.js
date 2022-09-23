function onClick() {
    // gets value from #hours input
    let hours = Number(document.getElementById('hours').value);
    //gets value from #days input
    let days = Number(document.getElementById('days').value);

    console.log(hours);
    console.log(days);

    function filter() {
        // checks for any input for hours
        if (hours == 0) {
            alert('Please enter hours.');
            console.log('hours== working');
            return
        }
        // displays an alert if user enters a value greater than 24 in #hours
        else if (hours > 24) {
            alert('Please enter a valid number of hours.');
            console.log('hours>24 working');
            return
        }
        // defaults days to 7 if user doesnt use #days input
        else if (days == 0) {
            days = 7;
            console.log('days== working');
        }
        // displays an alert if user enters a value greather than 7 in #days
        else if (days > 7) {
            alert('Please enter a valid number of days.');
            console.log('days>7 working');
            return
        }
        // runs calculate function
        return calculate();
    }
    
    function calculate() {
        console.log('hours: ', hours, 'days: ', days)
        const weeks = 52.143;
        const ten_k = 10000;
        result = ten_k / ((hours * days) * weeks);
        years_result = Math.floor(result);
        months_result = Math.round(12 * (result - Math.floor(result)));
        console.log('months: ', months_result);
        console.log('result: ', result);
        console.log(years_result);
        // takes result and rounds upwards for the first decimal 
        document.getElementById('result').innerText = 'At your current pace, it will take about' + years_result + ' Year(s), ' + 'and' + months_result + ' month(s) ' + 'to reach 10,000 hours of practice.';
        console.log('working 10k');
        return
    }

    // runs filter function
    return filter();
}


