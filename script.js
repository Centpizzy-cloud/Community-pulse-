// Add Nigerian States to Dropdown
const states = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT - Abuja", "Gombe",
  "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto",
  "Taraba", "Yobe", "Zamfara"
];

const stateSelect = document.getElementById("state");
states.forEach(state => {
  const option = document.createElement("option");
  option.value = state;
  option.textContent = state;
  stateSelect.appendChild(option);
});

// Handle form submission
const reportForm = document.getElementById("reportForm");
const messageDiv = document.getElementById("message");

reportForm.addEventListener("submit", function (e) {
  e.preventDefault();
  messageDiv.textContent = "✅ Thank you! Your report has been submitted.";
  reportForm.reset();
});