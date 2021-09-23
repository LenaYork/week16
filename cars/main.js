const getInfoButton = document.querySelector("#getInfo");
const oldPrice = document.querySelector("#oldPrice");
const yearOfBirth = document.querySelector("#years-select");
const labelName = document.querySelector("#labels-select");
const isPetrol = document.querySelector("#petrol");
const isDiezel = document.querySelector("#diezel");
const isElectric = document.querySelector("#electric");
const engineCapacity = document.querySelector("#engineCapacity");
const enginePower = document.querySelector("#enginePower");
const isConfirmed = document.querySelector("#confirm");
const errors = document.querySelector("#errors");
const resultArea = document.querySelector("#results");
let errorC = document.querySelector("#errorC");
let errorP = document.querySelector("#errorP");
let result = 0;


isConfirmed.addEventListener("change", function() {
    console.log(isConfirmed.checked);
    if (isConfirmed.checked)  {
        // getInfoButton.setAttribute("disabled", false);
        getInfoButton.removeAttribute("disabled");
        getInfoButton.classList.remove("disabled");
    } else {
        getInfoButton.setAttribute("disabled", true);
        getInfoButton.classList.add("disabled");
    }
});

engineCapacity.addEventListener("input", function() {
    errors.innerHTML = "";
    if (engineCapacity.value > 50) {
        errorC.innerHTML = "Слишком большое значение! Попробуйте меньше 50<br/>";
    } else errorC.innerHTML = "";
});

enginePower.addEventListener("input", function() {
    errors.innerHTML = "";
    if (enginePower.value > 300 ) {
        errorP.innerHTML = "Слишком большое значение! Попробуйте менее 300</br>";
    } else errorP.innerHTML = "";
});

getInfoButton.addEventListener("click", function() {
    if ((!errorP.innerHTML == "") || (!errorC.innerHTML == "" )) {
        console.log("&&&&&&&&");
        errors.innerHTML =  "Введите верные значения!</br>";
    } else if (!(
        oldPrice.value 
        && yearOfBirth.value 
        && labelName.value 
        && (isPetrol.checked || isDiezel.checked || isElectric.checked) 
        && engineCapacity.value 
        && enginePower.value
        )) {
        errors.innerHTML += "Все поля должны быть заполнены<br/>";
    } else {
        errors.innerHTML = "";

        //определяем коэффициент из расчета возраста машины
        let year; 
        switch(yearOfBirth.value) {
            case "2021":
                year = 1;
                break;

            case "2020":
                year = 0.95;
                break;

            case "2019":
                year = 0.9;
                break;
            
            case "2018":
                year = 0.8;
                break

            case "2015":
                year = 0.7;
                break;

            case "2010":
                year = 0.6;
                break;

            case "2000":
                year = 0.5;
                break;

            case "1990":
                year = 0.4;
                break;

            default:
            break;
        }  

        //определяем коэффициент из расчета марки 
        let label;
        switch(labelName.value) {
            case "honda":
            case "mazda":
            case "toyota":
                label = 0.5;
                break;

            case "infiniti":
            case "acura":
                label = 1;
                break;

            case "lada":
                label = 0.1;
                break;

            default:
                break;
            
        }

        //определяем коэффициент топлива
        let fuel;
        switch(true) {
            case isPetrol.checked: 
                fuel = 0.5;
                break;

            case isDiezel.checked:
                fuel = 0.8;
                break;

            case isElectric.checked:
                fuel = 1;
                break;

            default:
                break;
        }

        //коэффициент по объему двигателя
        let engineC;
        engineC = engineCapacity.value / 100;

        //коэффициент по мощности 
        let engineP;
        engineP = enginePower.value / 12;

        result = oldPrice.value * year * label * fuel * engineC * engineP;
        console.log(oldPrice.value, year, label, fuel, engineC, engineP);
        console.log("result", result);
        errors.innerHTML = "";

        resultArea.innerHTML = `Стоимость вашей машины: $ ${result}`;
    }
    
});
