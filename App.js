// All JavaScript code combined
        // ============================
        // 1. Click to Change Background
        const button = document.querySelector("#changeBgBtn");
        button.addEventListener("click", () => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            document.body.style.backgroundColor = "#" + randomColor;
        });

        // 2. Toggle Light Mode / Dark Mode
        const themeBtn = document.querySelector("#themeBtn");
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            themeBtn.textContent = document.body.classList.contains("dark-mode") 
                ? "Toggle Light Mode" 
                : "Toggle Dark Mode";
        });

        // 3. Hide Element on Click
        const head = document.querySelector("#h1");
        const btn = document.querySelector("#btn");
        btn.addEventListener("click", () => {
            head.style.display = "none";
            btn.disabled = true;
            btn.textContent = "Title Hidden";
        });

        // 4. Counter with Buttons
        let count = 0;
        const increaseBtn = document.querySelector("#incBtn");
        const decreaseBtn = document.querySelector("#decBtn");
        const counterDisplay = document.querySelector("#num");
        increaseBtn.addEventListener("click", () => {
            count++;
            counterDisplay.textContent = count;
        });
        decreaseBtn.addEventListener("click", () => {
            count--;
            counterDisplay.textContent = count;
        });

        // 5. Disable Button After Click
        const disableBtn = document.querySelector("#disableBtn");
        disableBtn.addEventListener("click", () => {
            disableBtn.disabled = true;
            disableBtn.textContent = "Button Disabled";
        });

        // 6. Live Character Count
        const textarea = document.querySelector("#myTextarea");
        const charCount = document.querySelector("#charCount");
        textarea.addEventListener("input", () => {
            charCount.textContent = textarea.value.length;
        });

        // 7. Password Strength Checker
        const passwordInputOne = document.querySelector("#password");
        const strengthDisplay = document.querySelector("#strength");
        passwordInputOne.addEventListener("input", () => {
            const password = passwordInputOne.value;
            if (password.length === 0) {
                strengthDisplay.textContent = "Empty";
                strengthDisplay.className = "status";
            } else if (password.length < 6) {
                strengthDisplay.textContent = "Weak";
                strengthDisplay.className = "status weak";
            } else if (password.length < 10) {
                strengthDisplay.textContent = "Medium";
                strengthDisplay.style.color = "orange";
            } else {
                strengthDisplay.textContent = "Strong";
                strengthDisplay.className = "status strong";
            }
        });

        // 8. Enter to Submit
        document.addEventListener("DOMContentLoaded", () => {
            const form = document.getElementById("myForm");
            const inputFields = document.querySelectorAll(".inputField");
            const submitBtn = form.querySelector("button[type='submit']");

            form.addEventListener("submit", (e) => {
                e.preventDefault();
                const values = Array.from(inputFields).map(input => input.value.trim());
                console.log("Form submitted with values:", values);
                alert("Form Submitted!\nValues: " + values.join(", "));
                
                // Clear form
                inputFields.forEach(field => field.value = "");
            });

            inputFields.forEach(field => {
                field.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        if (typeof form.requestSubmit === "function") {
                            form.requestSubmit();
                        } else {
                            submitBtn.click();
                        }
                    }
                });
            });
        });

        // 9. Auto Uppercase Input
        const uppercaseInput = document.querySelector("#uppercaseInput");
        uppercaseInput.addEventListener("input", () => {
            uppercaseInput.value = uppercaseInput.value.toUpperCase();
        });

        // 10. Detect Forbidden Words
        const forbiddenInput = document.querySelector("#forbiddenInput");
        const forbiddenForm = document.querySelector("#forbiddenForm");
        const forbiddenError = document.querySelector("#forbiddenError");
        const forbiddenWords = ["spam", "test", "badword"];

        forbiddenInput.addEventListener("input", () => {
            const inputValue = forbiddenInput.value.toLowerCase();
            const containsForbidden = forbiddenWords.some(word => inputValue.includes(word));
            if (containsForbidden) {
                forbiddenError.textContent = "Input contains forbidden words!";
                forbiddenInput.style.borderColor = "#f44336";
            } else {
                forbiddenError.textContent = "";
                forbiddenInput.style.borderColor = "";
            }
        });

        forbiddenForm.addEventListener("submit", (e) => {
            const inputValue = forbiddenInput.value.toLowerCase();
            const containsForbidden = forbiddenWords.some(word => inputValue.includes(word));
            
            if (containsForbidden) {
                e.preventDefault();
                forbiddenError.textContent = "Cannot submit: Contains forbidden words!";
                forbiddenInput.style.borderColor = "#f44336";
                forbiddenInput.focus();
            } else {
                alert("Message submitted successfully!");
                forbiddenInput.value = "";
                forbiddenError.textContent = "";
            }
        });

        // 11. Dropdown Dynamic Update
        const countrySelect = document.querySelector("#selectOne");
        const citySelect = document.querySelector("#selectTwo");

        const countryCityMap = {
            "USA": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
            "Canada": ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
            "UK": ["London", "Manchester", "Birmingham", "Liverpool", "Glasgow"],
            "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
            "Japan": ["Tokyo", "Osaka", "Kyoto", "Yokohama", "Nagoya"]
        };

        function initializeCitySelect() {
            citySelect.innerHTML = '<option value="">Select a country first</option>';
            citySelect.disabled = true;
        }

        initializeCitySelect();

        countrySelect.addEventListener("change", () => {
            const selectedCountry = countrySelect.value;
            const cities = countryCityMap[selectedCountry] || [];
            
            citySelect.innerHTML = "";
            
            if (cities.length > 0) {
                const defaultOption = document.createElement("option");
                defaultOption.value = "";
                defaultOption.textContent = "Select a city";
                citySelect.appendChild(defaultOption);
                
                cities.forEach(city => {
                    const option = document.createElement("option");
                    option.value = city;
                    option.textContent = city;
                    citySelect.appendChild(option);
                });
                
                citySelect.disabled = false;
            } else {
                const option = document.createElement("option");
                option.value = "";
                option.textContent = "Select a country first";
                citySelect.appendChild(option);
                citySelect.disabled = true;
            }
        });

        // 12. Form Validation on Submit
        const myForm = document.querySelector("#validationForm");
        const nameInput = document.querySelector("#nameInput");
        const emailInput = document.querySelector("#emailInput");
        const nameError = document.querySelector("#nameError");
        const emailError = document.querySelector("#emailError");

        nameInput.addEventListener("input", validateName);
        emailInput.addEventListener("input", validateEmail);
        nameInput.addEventListener("blur", validateName);
        emailInput.addEventListener("blur", validateEmail);

        function validateName() {
            const name = nameInput.value.trim();
            nameError.textContent = "";
            
            if (name === "") {
                nameError.textContent = "Name is required.";
                return false;
            }
            
            if (name.length < 2) {
                nameError.textContent = "Name must be at least 2 characters.";
                return false;
            }
            
            if (name.length > 50) {
                nameError.textContent = "Name must be less than 50 characters.";
                return false;
            }
            
            if (!/^[a-zA-Z\s]+$/.test(name)) {
                nameError.textContent = "Name can only contain letters and spaces.";
                return false;
            }
            
            return true;
        }

        function validateEmail() {
            const email = emailInput.value.trim();
            emailError.textContent = "";
            
            if (email === "") {
                emailError.textContent = "Email is required.";
                return false;
            }
            
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            
            if (!emailPattern.test(email)) {
                emailError.textContent = "Please enter a valid email address.";
                return false;
            }
            
            return true;
        }

        myForm.addEventListener("submit", (e) => {
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            
            if (!isNameValid || !isEmailValid) {
                e.preventDefault();
                if (!isNameValid) {
                    nameInput.focus();
                } else if (!isEmailValid) {
                    emailInput.focus();
                }
            } else {
                e.preventDefault();
                alert("Form validation successful! Form would be submitted.");
                nameInput.value = "";
                emailInput.value = "";
                nameError.textContent = "";
                emailError.textContent = "";
            }
        });

        // 13. Show/Hide Password
        const passwordInput = document.querySelector("#passwordInput");
        const togglePasswordBtn = document.querySelector("#togglePasswordBtn");
        togglePasswordBtn.addEventListener("click", () => {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                togglePasswordBtn.textContent = "👁️ Hide";
            } else {
                passwordInput.type = "password";
                togglePasswordBtn.textContent = "👁️ Show";
            }
        });

        // 14. Color Picker Live Preview
        const colorPicker = document.querySelector("#colorPicker");
        const colorPreview = document.querySelector("#colorPreview");
        const colorValue = document.querySelector("#colorValue");
        
        colorPreview.style.backgroundColor = colorPicker.value;
        colorValue.textContent = colorPicker.value;
        
        colorPicker.addEventListener("input", () => {
            const color = colorPicker.value;
            colorPreview.style.backgroundColor = color;
            colorValue.textContent = color;
        });

        // 15. Checkbox Agreement
        const termsCheckbox = document.querySelector("#termsCheckbox");
        const submitButton = document.querySelector("#submitButton");
        
        termsCheckbox.addEventListener("change", () => {
            submitButton.disabled = !termsCheckbox.checked;
            submitButton.textContent = termsCheckbox.checked 
                ? "Submit Agreement ✓" 
                : "Submit Agreement";
        });

        submitButton.addEventListener("click", () => {
            if (!termsCheckbox.checked) return;
            alert("Agreement submitted successfully!");
            termsCheckbox.checked = false;
            submitButton.disabled = true;
            submitButton.textContent = "Submit Agreement";
        });

        // 16. Image Hover Preview
        const thumbnail = document.querySelector("#thumbnail");
        const preview = document.querySelector("#preview");
        
        thumbnail.addEventListener("mouseover", () => {
            preview.style.display = "block";
        });
        
        thumbnail.addEventListener("mouseout", () => {
            preview.style.display = "none";
        });

        // 17. Scroll to Reveal Button
        const backToTopButton = document.getElementById('backToTop');
        const scrollPositionElement = document.getElementById('scrollPosition');
        
        function checkScrollPosition() {
            const scrollY = window.scrollY || window.pageYOffset;
            scrollPositionElement.textContent = scrollY;
            
            if (scrollY >= 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        }
        
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        window.addEventListener('scroll', checkScrollPosition);
        backToTopButton.addEventListener('click', scrollToTop);
        checkScrollPosition();

        // 18. Form Auto Save
        const autoSaveInput = document.querySelector("#autoSaveInput");
        const autoSaveInput2 = document.querySelector("#autoSaveInput2");
        const saveStatus = document.querySelector("#saveStatus");
        
        // Load saved data
        const savedText = localStorage.getItem("autoSaveText");
        const savedText2 = localStorage.getItem("autoSaveText2");
        
        if (savedText) {
            autoSaveInput.value = savedText;
        }
        if (savedText2) {
            autoSaveInput2.value = savedText2;
        }
        
        // Auto-save on input
        autoSaveInput.addEventListener("input", () => {
            localStorage.setItem("autoSaveText", autoSaveInput.value);
            showSaveStatus();
        });
        
        autoSaveInput2.addEventListener("input", () => {
            localStorage.setItem("autoSaveText2", autoSaveInput2.value);
            showSaveStatus();
        });
        
        function showSaveStatus() {
            saveStatus.textContent = "Auto-saved!";
            saveStatus.style.color = "#4CAF50";
            setTimeout(() => {
                saveStatus.textContent = "Auto-save enabled. Content saved locally.";
                saveStatus.style.color = "";
            }, 2000);
        }

        // 19. Click Outside to Close Modal
        const openModalBtn = document.querySelector("#openModalBtn");
        const modal = document.querySelector("#myModal");
        const closeModalBtn = document.querySelector("#closeModalBtn");
        
        openModalBtn.addEventListener("click", () => {
            modal.style.display = "block";
        });
        
        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
        
        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
        
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && modal.style.display === "block") {
                modal.style.display = "none";
            }
        });

        // 20. Key Logger Tracker
        const keyLoggerDiv = document.querySelector("#keyLoggerDiv");
        const clearBtn = document.querySelector("#clearBtn");
        const copyBtn = document.querySelector("#copyBtn");

        // Make the keylogger div focusable
        keyLoggerDiv.setAttribute("tabindex", "0");
        
        // Focus on keylogger div when section is clicked
        keyLoggerDiv.addEventListener("click", () => {
            keyLoggerDiv.focus();
        });

        keyLoggerDiv.addEventListener("keydown", (e) => {
            e.preventDefault(); // Prevent default behavior
            
            // Only log printable keys
            if (e.key.length === 1 || e.key === " " || e.key === "Enter" || e.key === "Tab" || e.key === "Backspace") {
                let displayKey = e.key;
                
                // Format special keys
                if (e.key === " ") displayKey = "[Space]";
                if (e.key === "Enter") displayKey = "[Enter]\n";
                if (e.key === "Tab") displayKey = "[Tab]";
                if (e.key === "Backspace") {
                    // Remove last character
                    const spans = keyLoggerDiv.querySelectorAll("span");
                    if (spans.length > 0) {
                        keyLoggerDiv.removeChild(spans[spans.length - 1]);
                    }
                    return;
                }
                
                const span = document.createElement("span");
                span.textContent = displayKey;
                keyLoggerDiv.appendChild(span);
                keyLoggerDiv.scrollTop = keyLoggerDiv.scrollHeight;
            }
        });

        clearBtn.addEventListener("click", () => {
            keyLoggerDiv.innerHTML = "";
            keyLoggerDiv.focus();
        });

        copyBtn.addEventListener("click", async () => {
            try {
                const text = Array.from(keyLoggerDiv.childNodes).map(n => n.textContent).join("");
                await navigator.clipboard.writeText(text);
                copyBtn.textContent = "Copied!";
                setTimeout(() => (copyBtn.textContent = "Copy"), 1000);
            } catch {
                alert("Copy failed. Select and copy manually.");
            }
        });