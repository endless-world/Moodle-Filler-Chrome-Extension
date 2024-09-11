// id_desc = id_introeditoreditable
// title = title
desc_textarea = document.getElementById('decription')
const today = new Date();


const dayOfMonth = today.getDate(); // Get the day of the month (1-31)


// Get the month (0-11) and convert it to a month name
const monthNames = [
    'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
    'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'
];
const monthName = monthNames[today.getMonth()];

desc_textarea.value = `Test bajarish vaqti 1 soat.<br/> Imtihonga kirish ${dayOfMonth} - ${monthName} 17:00 da yakunlanadi.<br/> Testni boshlash uchun pastgi tugmani(Attempt quiz) bosing.`

document.getElementById("auto-fill").addEventListener("click", () => {
    /* Auto fill form */
    console.log("Auto fill!");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            name: document.getElementById('name').value,
            decription: desc_textarea.value,
            begin_time_hour: document.getElementById('begin_time_hour').value,
            begin_time_minute: document.getElementById('begin_time_minute').value,
            end_time_hour: document.getElementById('end_time_hour').value,
            end_time_minute: document.getElementById('end_time_minute').value,
            // address1: document.getElementById('address1').value,
            // address2: document.getElementById('address2').value,
            // address3: document.getElementById('address3').value,
            // city: document.getElementById('city').value,
            // postcode: document.getElementById('postcode').value,
            // cardnumber: document.getElementById('card-number').value,
            // month: document.getElementById('month').value,
            // year: document.getElementById('year').value,
            // cvv: document.getElementById('cvv').value
        }, function (response) {
            console.log(response.status);
        });
    });
});

document.getElementById("reset-fields").addEventListener("click", () => {
    /* Reset extension form values */
    document.getElementById('name').value = '';
    document.getElementById('decription').value = '';
    document.getElementById('telephone').value = '';
    document.getElementById('address1').value = '';
    document.getElementById('address2').value = '';
    document.getElementById('address3').value = '';
    document.getElementById('city').value = '';
    document.getElementById('postcode').value = '';
    document.getElementById('card-number').value = '';
    document.getElementById('cvv').value = '';
});
