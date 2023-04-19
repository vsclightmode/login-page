        // Dark mode butonuna tıklandığında çalışacak fonksiyon
        document.getElementById("darkModeBtn").addEventListener("click", function () {
            // body elementine "dark-mode" class'ını ekleyip çıkararak dark mode'u aktifleştir veya devre dışı bırak
            document.body.classList.toggle("dark-mode");
            // login-container elementine "dark-mode" class'ını ekleyip çıkararak dark mode'u aktifleştir veya devre dışı bırak
            document.querySelector(".login-container").classList.toggle("dark-mode");
            // login-title elementine "dark-mode" class'ını ekleyip çıkararak dark mode'u aktifleştir veya devre dışı bırak
            document.querySelector(".login-title").classList.toggle("dark-mode");
            // login-form elementine "dark-mode" class'ını ekleyip çıkararak dark mode'u aktifleştir veya devre dışı bırak
            document.querySelector(".login-form").classList.toggle("dark-mode");
            // login-label elementine "dark-mode" class'ını ekleyip çıkararak dark mode'u aktifleştir veya devre dışı bırak
            document.querySelectorAll(".login-label").forEach(function (label) {
                label.classList.toggle("dark-mode");
            });
            // login-input elementine "dark-mode" class'ını ekleyip çıkararak dark mode'u aktifleştir veya devre dışı bırak
            document.querySelectorAll(".login-input").forEach(function (input) {
                input.classList.toggle("dark-mode");
            });
            // login-button elementine "dark-mode" class'ını ekleyip çıkararak dark mode'u aktifleştir veya devre dışı bırak
            document.querySelector(".login-button").classList.toggle("dark-mode");
            // login-link elementine "dark-mode" class'ını ekleyip çıkararak dark mode'u aktifleştir veya devre dışı bırak
            document.querySelector(".login-link").classList.toggle("dark-mode");
            // login-link içindeki a elementine "dark-mode" class'ını ekleyip çıkararak dark mode'u aktifleştir veya devre dışı bırak
            document.querySelector(".login-link a").classList.toggle("dark-mode");
            var darkModeBtn = document.getElementById("darkModeBtn");
            if (document.body.classList.contains("dark-mode")) {
                darkModeBtn.textContent = "White Mode";
            } else {
                darkModeBtn.textContent = "Dark Mode";
            }
        });
