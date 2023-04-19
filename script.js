        document.getElementById("darkModeBtn").addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            document.querySelector(".login-container").classList.toggle("dark-mode");
            document.querySelector(".login-title").classList.toggle("dark-mode");
            document.querySelector(".login-form").classList.toggle("dark-mode");
            document.querySelectorAll(".login-label").forEach(function (label) {
                label.classList.toggle("dark-mode");
            });
            document.querySelectorAll(".login-input").forEach(function (input) {
                input.classList.toggle("dark-mode");
            });
            document.querySelector(".login-button").classList.toggle("dark-mode");
            document.querySelector(".login-link").classList.toggle("dark-mode");
            document.querySelector(".login-link a").classList.toggle("dark-mode");
            var darkModeBtn = document.getElementById("darkModeBtn");
            if (document.body.classList.contains("dark-mode")) {
                darkModeBtn.textContent = "White Mode";
            } else {
                darkModeBtn.textContent = "Dark Mode";
            }
        });
