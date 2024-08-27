// id_desc = id_introeditoreditable
// title = title
document.getElementById("auto-fill").addEventListener("click", () => {
    /* Auto fill form */
    console.log("Auto fill!");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            name: document.getElementById('name').value,
            decription: document.getElementById('decription').value,
            // telephone: document.getElementById('telephone').value,
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
