function calculate() {
    var heightInd = document.getElementById('height').value;
    var weightInd = document.getElementById('weight').value;

    heightValue.value = heightInd;
    weightValue.value = weightInd;

    var bmi = Number((weightInd / Math.pow((heightInd / 100), 2)).toFixed(1));
    bmi_score.textContent = bmi;

    var angle = 0;

    if (bmi < 18.5) {
        message.textContent = "Underweight";
        message.style.color = "blue";
        angle = 90 + ((bmi - 0)/(18.5 - 0)) * (130 - 90);
    } else if (bmi >= 18.5 && bmi < 25) {
        message.textContent = "Normal Weight";
        message.style.color = "green";
        angle = 140 + ((bmi - 18.5) / (25 - 18.5)) * (180 - 140); // Interpolate
    } else if (bmi >= 25 && bmi < 30) {
        message.textContent = "Overweight";
        message.style.color = "orange";
        angle = 190 + ((bmi - 25) / (30 - 25)) * (230 - 190); // Interpolate
    } else if (bmi >= 30) {
        message.textContent = "Obese";
        message.style.color = "red";
        angle = 240 + ((bmi - 30) / (150 - 30)) * (270 - 230);
    }

    gear.style.rotate = angle + 'deg';
    console.log(`BMI: ${bmi}, Angle: ${angle}`);
}


function valueFix (){
    var heightInd = document.getElementById('height')
    var weightInd = document.getElementById('weight')

    heightInd.value = heightValue.value;
    weightInd.value = weightValue.value;
    calculate()
}