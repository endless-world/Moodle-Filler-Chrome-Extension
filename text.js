// Create a new Date object for the current date
const today = new Date();

// Get the day of the month (1-31)
const dayOfMonth = today.getDate();

// Get the month (0-11) and convert it to a month name
const monthNames = [
    'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
    'Iyul', 'Avgust',  'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'
];
const monthName = monthNames[today.getMonth()];

console.log(`Day of the month: ${dayOfMonth}`);
console.log(`Month name: ${monthName}`);