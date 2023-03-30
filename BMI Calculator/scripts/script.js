/* Einfügen im HTML

<script src="script.js"> </script>

*/

// BMI Calculator

function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var bmi = weight / (height * height);
    bmi = bmi.toFixed(2); // Begrentz die Kommastelle auf 2
    alert("Dein BMI ist " + bmi);
}
