function calc() {
    let result = document.getElementById('result');
    let calc_container = document.getElementById('calc_container');
    if (result.style.display === 'none' || calc_container.style.display === 'hidden') {
        result.style.display = 'block';
        calc_container.style.visibility = 'visible';
    }
    else {
        result.style.display = 'none';
        calc_container.style.visibility = 'hidden';
    }

    // gets value from #hours input
    let hours = Number(document.getElementById('hours').value);
    // gets value from #days input
    let days = Number(document.getElementById('days').value);
    // gets value from #days input
    let years = Number(document.getElementById('years').value);
    // gets value from #days input
    let months = Number(document.getElementById('months').value);

    const weeks = 52.143;
    const ten_k = 10000;
    let to_date = '';
    let total_weeks = '';
    let remaining_hours = '';

    console.log('hours: ', hours);
    console.log('days: ', days);
    console.log('years: ', years);
    console.log('months: ', months);

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

        else if (months > 11) {
            alert('Please enter a valid number of months.');
            return
        }
        else if (months > 0) {
            total_weeks = months * 4.345;
        }
        else if (years > 0) {
            total_weeks = years * weeks + total_weeks;
        }
        console.log('total weeks: ', total_weeks);
        // runs calculate function
        return calculate();
    }
    
    function calculate() {
        console.log('hours: ', hours, 'days: ', days);
        // calculates total hours spent practicing so far
        to_date = ((total_weeks * days) * hours);
        remaining_hours = ten_k - to_date;
        console.log('remaining: ', remaining_hours);
        let total = (hours * days) * weeks
        let result = remaining_hours / total;
        years_result = Math.floor(result);
        months_result = Math.round(12 * (result - Math.floor(result)));
        console.log('months: ', months_result);
        console.log('result: ', result);
        console.log(years_result);
        // takes result and rounds upwards for the first decimal 
        result = document.getElementById('result').innerText = 'You have ' + remaining_hours + ' hours left.\n' + 'At your set pace, ' + 'It will take about:\n' + years_result + ' Year(s), ' + 'and ' + months_result + ' month(s)\n' + 'to reach 10,000 hours of practice.';
        console.log('working 10k');
        return
    }

    // runs filter function
    return filter();
}

function about_reveal() {
    let about = document.getElementById('about');
    let abt_container = document.getElementById('about_container');
    if (about.style.display === 'none' || abt_container.style.display === 'hidden') {
        about.style.display = 'block';
        abt_container.style.visibility = 'visible';
        
    }
    else {
        about.style.display = 'none';
        abt_container.style.visibility = 'hidden';
    }
}