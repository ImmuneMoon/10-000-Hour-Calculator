$(document).ready(function() {

    // --- CONSTANTS ---
    // Defining these as constants makes the code easier to read and manage.
    const GOAL_HOURS = 10000;
    const WEEKS_IN_YEAR = 52.143; // Average number of weeks in a year
    const WEEKS_IN_MONTH = WEEKS_IN_YEAR / 12; // Approx. 4.345

    /**
     * Main function to run the 10,000-hour calculation.
     * It orchestrates getting input, validating it, calculating, and displaying the result.
     */
    function runCalculator() {
        // 1. --- GET AND PARSE USER INPUT ---
        // We get all values first and convert them to numbers.
        const hoursPerDay = parseFloat($('#hours').val()) || 0;
        let daysPerWeek = parseFloat($('#days').val()) || 0;
        const yearsPracticed = parseFloat($('#years').val()) || 0;
        const monthsPracticed = parseFloat($('#months').val()) || 0;

        // 2. --- VALIDATE THE INPUT ---
        // This block checks for common errors.
        if (hoursPerDay <= 0) {
            alert('Please enter the hours you practice per day.');
            return;
        }
        if (hoursPerDay > 24) {
            alert('Hours per day cannot be more than 24.');
            return;
        }
        if (daysPerWeek > 7) {
            alert('Days per week cannot be more than 7.');
            return;
        }
        if (monthsPracticed >= 12) {
            alert('For 12 months or more, please use the "Years" input.');
            return;
        }
        if (daysPerWeek === 0) {
            // Default to 7 if the user leaves the days input blank.
            daysPerWeek = 7;
        }

        // 3. --- PERFORM THE CALCULATIONS ---
        // Calculate the total time the user has already practiced in weeks.
        const totalWeeksPracticed = (yearsPracticed * WEEKS_IN_YEAR) + (monthsPracticed * WEEKS_IN_MONTH);

        // Calculate total hours completed to date.
        const hoursCompleted = totalWeeksPracticed * daysPerWeek * hoursPerDay;

        // 4. --- GENERATE THE RESULT MESSAGE ---
        let resultMessage = '';

        if (hoursCompleted >= GOAL_HOURS) {
            const surplus = Math.round(hoursCompleted - GOAL_HOURS);
            if (surplus === 0) {
                resultMessage = "You've reached 10,000 hours, time to celebrate!";
            } else {
                resultMessage = `Congrats! You've surpassed 10,000 hours by ${surplus} hours!`;
            }
        } else {
            const remainingHours = GOAL_HOURS - hoursCompleted;
            const hoursPerYear = hoursPerDay * daysPerWeek * WEEKS_IN_YEAR;

            // This prevents a "divide by zero" error if user enters 0 hours or days.
            if (hoursPerYear <= 0) {
                displayResult(""); // Clear previous results if input is invalid
                return;
            }

            const yearsRemainingDecimal = remainingHours / hoursPerYear;
            const yearsToGoal = Math.floor(yearsRemainingDecimal);
            const monthsToGoal = Math.round((yearsRemainingDecimal - yearsToGoal) * 12);

            resultMessage = `You have approx. ${Math.round(remainingHours)} hours left.\n` +
                            `At your set pace, it will take about:\n` +
                            `${yearsToGoal} Year(s) and ${monthsToGoal} month(s)\n` +
                            `to reach 10,000 hours of practice.`;
        }
        
        // 5. --- DISPLAY THE RESULT ---
        displayResult(resultMessage);
    }

    /**
     * Updates the UI to show the final result.
     * @param {string} message - The text to display.
     */
    function displayResult(message) {
        $('#result').text(message).show();
        $('#calc_container').css("visibility", "visible");
    }

    /**
     * Toggles the visibility of the "About" section.
     * Using .toggle() is a simpler way to show/hide elements.
     */
    function toggleAboutSection() {
        $('#about, #about_container').toggle();
    }

    // --- EVENT LISTENERS ---
    // Binds the functions to your HTML buttons.
    $('#calc_btn').on('click', runCalculator); // Assumes your button has id="calc_btn"
    $('#about_btn').on('click', toggleAboutSection);

});
