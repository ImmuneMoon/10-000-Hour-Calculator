/*
    10,000 Hour Calculator Script
    This script calculates the time remaining to reach 10,000 hours of practice in a skill.
*/

// --- CONSTANTS ---
// Using constants makes the code's intent clearer and easier to modify.
const GOAL_HOURS = 10000;
const WEEKS_IN_YEAR = 52.143; // Average weeks in a year
const WEEKS_IN_MONTH = WEEKS_IN_YEAR / 12; // Approx. 4.345 weeks in a month

/**
 * This is the main calculation function.
 * It's defined in the global scope to be accessible by the `onclick="calc();"` attribute in your HTML.
 */
function calc() {
    // 1. --- GET AND PARSE USER INPUT ---
    // Get values from input fields and convert them to numbers.
    // `|| 0` ensures that if an input is blank, it's treated as zero.
    const hoursPerDay = parseFloat($('#hours').val()) || 0;
    let daysPerWeek = parseFloat($('#days').val()) || 0;
    const yearsPracticed = parseFloat($('#years').val()) || 0;
    const monthsPracticed = parseFloat($('#months').val()) || 0;

    // 2. --- VALIDATE THE INPUT ---
    // Check for invalid entries before doing any calculations.
    if (hoursPerDay <= 0) {
        alert('Please enter the hours you practice per day.');
        return; // Stops the function
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
        // This prevents confusion between the 'months' and 'years' fields.
        alert('For 12 months or more, please use the "Years" input.');
        return;
    }

    // Default to 7 days a week if the user leaves the input blank, as stated in the HTML.
    if (daysPerWeek === 0) {
        daysPerWeek = 7;
    }

    // 3. --- PERFORM CALCULATIONS ---
    // Calculate the total duration the user has already practiced, converted to weeks.
    const totalWeeksPracticed = (yearsPracticed * WEEKS_IN_YEAR) + (monthsPracticed * WEEKS_IN_MONTH);

    // Calculate the total number of hours completed to date based on the practice duration and pace.
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
        // Calculate the rate of practice in hours per year.
        const hoursPerYear = hoursPerDay * daysPerWeek * WEEKS_IN_YEAR;

        // This check prevents a "divide by zero" error.
        if (hoursPerYear <= 0) {
            displayResult(""); // Clear previous results if input is invalid
            return;
        }

        const yearsRemainingDecimal = remainingHours / hoursPerYear;
        const yearsToGoal = Math.floor(yearsRemainingDecimal);
        // Calculate the remaining months from the decimal part of the years.
        const monthsToGoal = Math.round((yearsRemainingDecimal - yearsToGoal) * 12);

        // Use template literals and `\n` for new lines to format the output string.
        resultMessage = `You have approx. ${Math.round(remainingHours)} hours left.\n` +
                        `At your set pace, it will take about:\n` +
                        `${yearsToGoal} Year(s) and ${monthsToGoal} month(s)\n` +
                        `to reach 10,000 hours of practice.`;
    }
    
    // 5. --- DISPLAY THE RESULT ---
    displayResult(resultMessage);
}

/**
 * A helper function to update the result paragraph on the page.
 * @param {string} message - The text to display in the result element.
 */
function displayResult(message) {
    $('#result').text(message).show();
    $('#calc_container').css("visibility", "visible");
}

/**
 * A helper function that toggles the visibility of the "About" section.
 * Using .toggle() is a simpler and more efficient way to achieve this.
 */
function toggleAboutSection() {
    $('#about').toggle();
}

// --- DOCUMENT READY ---
// This block of code ensures that event listeners are only attached after the entire page has loaded.
$(document).ready(function() {
    // We bind the `toggleAboutSection` function to the click event of the "About" button.
    // This is a more modern approach than using onclick in the HTML for this button.
    $('#about_btn').on('click', toggleAboutSection);
});
