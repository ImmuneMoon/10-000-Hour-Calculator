function calc() {
    // gets value from #hours input
    let hours = Number($('#hours').val());
    // gets value from #days input
    let days = Number($('#days').val());
    // gets value from #years input
    let years = Number($('#years').val());
    // gets value from #months input
    let months = Number($('#months').val());
    // initializes variables for nested functions
    const weeks = 52.143;
    const ten_k = 10000;
    let total_weeks = 0;

    function filter() {
        // checks for any input for hours
        if (hours == 0) {
            alert('Please enter hours.');
            return
        }
        // displays an alert if user enters a value greater than 24 in #hours
        if (hours > 24) {
            alert('Please enter a valid number of hours.');
            return
        }
        // defaults days to 7 if user doesnt use #days input
        if (days == 0) {
            days = 7;
        }
        // displays an alert if user enters a value greather than 7 in #days
        if (days > 7) {
            alert('Please enter a valid number of days.');
            return
        }
        // displays a alert if months is equal to 12(a year) or greater 
        if (months >= 12) {
            alert('Please use the "Years" input for durations of 12 months or more.');
            return
        }
        // converts months to weeks if month is a valid number
        if (months > 0) {
            total_weeks = months * 4.345;
        }
        /* converts years to weeks if years is a valid number and adds it to
           any weeks converted from months */
        if (years > 0) {
            total_weeks = (years * weeks) + total_weeks;
        }
        
        // ⭐ THE FIX: If no years or months were entered, total_weeks is 0.
        // This line checks for that case and defaults to 1 week of practice.
        if (total_weeks === 0) {
            total_weeks = 1;
        }

        // runs calculate function
        return calculate();
    }

    function calculate() {
        // grabs the result <p> element
        let result_txt = document.getElementById('result');
        // if the elements are not visible, they are made visible
        $('#result').show();
        $('#calc_container').css("visibility", "visible");
        // calculates total hours spent practicing so far
        let to_date = (total_weeks * days) * hours;
        // in the case of the users input being greater than 10k
        if (Math.round(to_date) > ten_k) {
            // calculates surplus
            surplus = to_date - ten_k;
            surplus = Math.round(surplus);
            result_txt.innerText = `Congrats! You\'ve surpassed 10,000 hours by ${surplus} hours!`;
            // exit
            return
        }
        else {
            let remaining_hours = Math.round(ten_k - to_date);
            let total = (hours * days) * weeks;
            let result = remaining_hours / total;
            years_result = Math.floor(result);
            months_result = Math.round(12 * (result - Math.floor(result)));

            // in the case of the users input equaling 10k
            if (Math.round(to_date) == ten_k) {
                result_txt.innerText = 'You\'ve reached 10,000 hours, time to celebrate!';
                // exit
                return
            }
            // otherwise
            else {
                // takes result and rounds upwards for the first decimal 
                result_txt.innerText = `You have approx. ${remaining_hours} hours left.\nAt your set pace, It will take about:\n${years_result} Year(s), and ${months_result} month(s)\nto reach 10,000 hours of practice.`;
                // exits function
                return
            }
        }
    }
        // runs filter function
        return filter();
}

// grabs the about <input> element
$(document).on('click', '#about_btn', function about_reveal() {
    // if the elements are not visible, they are made visible
    if ($('#about').is(':hidden')) {
        $('#about').show();
        $('#about_container').css("visibility", "visible");
    }
    // if the elements are visible, they are hidden
    else {
        $('#about').hide();
        $('#about_container').css("visibility", "hidden");
    }
});
