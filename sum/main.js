const getNumbers = document.querySelector("#getNumbers");
let userNumbers = [];
getNumbers.addEventListener("click", sumInput);


function sumInput() {
    let userNum = 0;
    do {
        userNum = prompt("Вводите ваши числа", 5);
        if (!isNaN(userNum)) {
        userNumbers.push(+userNum);
        } else alert("Вводить можно только цифры!");
    }while (userNum != null && userNum != undefined && !isNaN(userNum));
    //console.log("итого массив", userNumbers);
    sortedNumbers = userNumbers.sort((a, b) => a -b );
    totalSum = userNumbers.reduce((a,b) => a + b, 0);
    alert(`Ваши цифры от меньшего к большему: ${sortedNumbers}`);
    alert(`Сумма всех ваших цифр: ${totalSum}`);
}
