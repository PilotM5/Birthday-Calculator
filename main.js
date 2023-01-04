function calculateDaysUntilBirthday() {
    // Get the current date
    const today = new Date();
    // Get the user's birthday
    const birthday = new Date(
        document.getElementById("year").value,
        document.getElementById("month").value - 1, // months are 0-indexed
        document.getElementById("day").value
    );
    // Check if the birthday has passed this year or not
    if (today.getMonth() > birthday.getMonth() ||
        (today.getMonth() === birthday.getMonth() && today.getDate() > birthday.getDate())) {
        // If the birthday has passed, set the birthday to next year
        birthday.setFullYear(today.getFullYear() + 1);
    }
    // Calculate the time difference between today and the birthday in milliseconds
    const timeDifference = birthday.getTime() - today.getTime();
    // Convert the time difference to days
    const daysUntilBirthday = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const abs_daysUntilBirthday = Math.abs(daysUntilBirthday);
    // Display the result
    document.getElementById("result").innerHTML = `There are ${abs_daysUntilBirthday} days until your birthday!`;
}