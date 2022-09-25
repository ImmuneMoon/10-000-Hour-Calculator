function calc() {
    // grabs the result <p> element
    let result_txt = document.getElementById('result');
    // grabs the calc_container <p> element
    let calc_container = document.getElementById('calc_container');
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
    let total_weeks = 0;

    function filter() {
        // checks for any input for hours
        if (hours == 0) {
            alert('Please enter hours.');
            console.log('hours== working');
            return
        }
        // displays an alert if user enters a value greater than 24 in #hours
        if (hours > 24) {
            alert('Please enter a valid number of hours.');
            console.log('hours>24 working');
            return
        }
        // defaults days to 7 if user doesnt use #days input
        if (days == 0) {
            days = 7;
            console.log('days== working', days);
        }
        // displays an alert if user enters a value greather than 7 in #days
        if (days > 7) {
            alert('Please enter a valid number of days.');
            console.log('days>7 working');
            return
        }
        // displays a alert if months is equal to 12(a year) or greater 
        if (months > 12) {
            alert('Please enter a valid number of months.');
            return
        }
        // displays a alert if months is equal to 12(a year) or greater 
        if (months == 12) {
            total_weeks == weeks
        }
        // converts months to weeks if month is a valid number
        if (months > 0) {
            total_weeks = months * 4.345;
            console.log('mw: ', total_weeks)
        }
        /* converts years to weeks if years is a valid number and adds it to
           any weeks converted from months */
        if (years > 0) {
            total_weeks = (years * weeks) + total_weeks;

            console.log('tw-filter: ', total_weeks)
        }
            // runs calculate function
            return calculate();
    }

    function calculate() {
        console.log('years: ', years)
        console.log('tw: ', total_weeks)
        console.log('days: ', days)
        console.log('hours: ', hours)
        // if the elements are not visible, they are made visible
        result_txt.style.display = 'block';
        calc_container.style.visibility = 'visible';
        // calculates total hours spent practicing so far
        let to_date = (total_weeks * days) * hours;
        console.log('to date: ', to_date);
        // in the case of the users input being greater than 10k
        if (Math.round(to_date) > ten_k) {
            // calculates surplus
            surplus = to_date - ten_k;
            surplus = Math.round(surplus);
            result = document.getElementById('result').innerText = `Congrats! You\'ve surpassed 10,000 hours by ${surplus} hours!`;
            // exit
            return
        }
        else {
            let remaining_hours = Math.round(ten_k - to_date);
            let total = (hours * days) * weeks;
            result = remaining_hours / total;
            years_result = Math.round(result);
            months_result = Math.round(12 * (result - Math.floor(result)));

            // in the case of the users input equaling 10k
            if (Math.round(to_date) == ten_k) {
                result = document.getElementById('result').innerText = 'You\'ve reached 10,000 hours, time to celebrate!';
                console.log('to date: ', to_date);
                // exit
                return
            }
            // otherwise
            else {
                // takes result and rounds upwards for the first decimal 
                result = document.getElementById('result').innerText = `You have approx. ${remaining_hours} hours left.\nAt your set pace, It will take about:\n${years_result} Year(s), and ${months_result} month(s)\nto reach 10,000 hours of practice.`;
                // exits function
                return
            }
        }
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
    if (about.style.display == 'none' || abt_container.style.display == 'hidden') {
        about.style.display = 'block';
        abt_container.style.visibility = 'visible';
        
    }
    // if the elements are visible, they are hidden
    else {
        about.style.display = 'none';
        abt_container.style.visibility = 'hidden';
    }
};

