chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        try {
            //? General
            // Name
            document.getElementById("id_name").value = request.name;
            // Description
            document.getElementById("id_introeditoreditable").innerHTML = "<h5>" + request.decription + "</h5>";

            // ? Timing
            // Open the quiz
            document.getElementById("id_timeopen_hour").value = request.begin_time_hour;
            document.getElementById("id_timeopen_hour").disabled = false;
            document.getElementById("id_timeopen_minute").value = request.begin_time_minute;
            document.getElementById("id_timeopen_minute").disabled = false;
            document.getElementById("id_timeopen_enabled").checked = true
            // Close the quiz
            document.getElementById("id_timeclose_hour").value = request.end_time_hour;
            document.getElementById("id_timeclose_hour").disabled = false;
            document.getElementById("id_timeclose_minute").value = request.end_time_minute;
            document.getElementById("id_timeclose_minute").disabled = false;
            document.getElementById("id_timeclose_enabled").checked = true

            //? Activity completion
            // show all hidden needed fields
            const elements = document.querySelectorAll('#id_activitycompletionheadercontainer .form-group.row.fitem');
            elements.forEach(element => {
                element.removeAttribute('hidden');
                element.removeAttribute('style');
            });
            const labels = document.querySelectorAll('#id_activitycompletionheadercontainer label[data-fieldtype="checkbox"]');
            labels.forEach(element => {
                element.removeAttribute('hidden');
                element.removeAttribute('style');
            });
            const itemy = document.querySelectorAll('.d-flex.flex-wrap.align-items-center .form-group.fitem');
            itemy.forEach(element => {
                element.removeAttribute('hidden');
                element.removeAttribute('style');
            });
            // Completion tracking
            document.getElementById("id_completion").value = 2
            // Require view
            document.getElementById("id_completionview").checked = false
            document.getElementById("id_completionview").disabled = false
            // Require attempts
            document.getElementById("id_completionminattemptsenabled").checked = true
            document.getElementById("id_completionminattemptsenabled").disabled = false
            document.getElementById("id_completionminattempts").disabled = false
            // Others
            document.getElementById("order_billing_address").value = request.address1;
            document.getElementById("order_billing_address_2").value = request.address2;
            document.getElementById("order_billing_address_3").value = request.address3;
            document.getElementById("order_billing_city").value = request.city;
            document.getElementById("order_billing_zip").value = request.postcode;
            document.getElementById("credit_card_number").value = request.cardnumber;
            document.getElementById('credit_card_month').value = request.month;
            document.getElementById('credit_card_year').value = request.year;
            document.getElementById("credit_card_verification_value").value = request.cvv;
            sendResponse({ status: "Success!" });
        } catch (error) {
            console.log(error)
            sendResponse({ status: "Exception occurred!" });
        }
    }
);