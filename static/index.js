document.addEventListener("DOMContentLoaded", function() {
    fetch("/get_location_names")
        .then(response => response.json())
        .then(data => {
            const locationSelect = document.getElementById("location");
            data.locations.forEach(location => {
                const option = document.createElement("option");
                option.value = location;
                option.textContent = location;
                locationSelect.appendChild(option);
            });
        });

    const form = document.getElementById("price-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const bhk = parseFloat(document.getElementById("bhk").value);
        const bath = parseFloat(document.getElementById("bath").value);
        const area = parseFloat(document.getElementById("area").value);
        const location = document.getElementById("location").value;

        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = '';

        if (bhk < 0 || bath < 0 || area < 0) {
            errorMessage.textContent = "Please enter valid values.";
            return;
        }

        fetch("/predict_home_price", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `bhk=${bhk}&bath=${bath}&total_sqft=${area}&location=${location}`
        })
        .then(response => response.json())
        .then(data => {
            const resultElement = document.getElementById("result");
            if (data.estimated_price < 0) {
                errorMessage.textContent = "Please enter valid values.";
            } else {
                resultElement.textContent = `${data.estimated_price} Lakh Rupees`;
            }
        });
    });
});
