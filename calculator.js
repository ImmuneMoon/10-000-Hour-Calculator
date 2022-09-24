function calc() {
    // grabs the result <p> element
    let result = document.getElementById('result');
    // grabs the calc_container <p> element
    let calc_container = document.getElementById('calc_container');
    // if the elements are not visible, they are made visible
    result.style.display = 'block';
    calc_container.style.visibility = 'visible';

    // gets value from #hours input
    let hours = Number(document.getElementById('hours').value);
    // gets value from #days input
    let days = Number(document.getElementById('days').value);
    // gets value from #days input
    let years = Number(document.getElementById('years').value);
    // gets value from #days input
    let months = Number(document.getElementById('months').value);
    // initializes variables for nested functions
    const weeks = 52.143;
    const ten_k = 10000;
    let to_date = '';
    let total_weeks = '';
    let remaining_hours = '';

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
        // displays a alert if months is equal to 12(a year) or greater 
        else if (months > 11.99) {
            alert('Please enter a valid number of months.');
            return
        }
        // converts months to weeks if month is a valid number
        else if (months > 0) {
            total_weeks = months * 4.345;
        }
        /* converts years to weeks if years is a valid number and adds it to
           any weeks converted from months */
        else if (years > 0) {
            total_weeks = (years * weeks) + total_weeks;
        }
        // runs calculate function
        return calculate();
    }
    
    function calculate() {
        // calculates total hours spent practicing so far
        to_date = ((total_weeks * days) * hours);
        remaining_hours = (ten_k - to_date);
        let total = (hours * days) * weeks;
        let result = remaining_hours / total;
        years_result = Math.floor(result);
        months_result = Math.round(12 * (result - Math.floor(result)));
        // takes result and rounds upwards for the first decimal 
        result = document.getElementById('result').innerText = 'You have ' + remaining_hours + ' hours left.\n' + 'At your set pace, ' + 'It will take about:\n' + years_result + ' Year(s), ' + 'and ' + months_result + ' month(s)\n' + 'to reach 10,000 hours of practice.';
        // exits function
        return
    }

    // runs filter function
    return filter();
}

function about_reveal() {
    // grabs the about <p> element
    let about = document.getElementById('about');
    // grabs the about_container <p> element
    let abt_container = document.getElementById('about_container');
    // if the elements are not visible, they are made visible
    if (about.style.display === 'none' || abt_container.style.display === 'hidden') {
        about.style.display = 'block';
        abt_container.style.visibility = 'visible';
        
    }
    // if the elements are visible, they are hidden
    else {
        about.style.display = 'none';
        abt_container.style.visibility = 'hidden';
    }
}