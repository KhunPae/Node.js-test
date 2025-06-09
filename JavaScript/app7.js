// function toCelsius(fahrenheit)
// {
//     let value = (fahrenheit - 32) * 5 / 9
//     return value.toFixed(2) + "°C";
// }
// function display(elementId, value)
// {
//     document.getElementById(elementId).innerHTML = "<b>"+value+"</b>"
// }
// function toFahrenheit(celsius)
// {
//     let value = (celsius * 9) / 5 +32;
//     return value.toFixed(2) + "°F";
// }
// function toCelsiusProgram()
// {
//     alert(toCelsiusProgram(150));
// }
// function toFahrenheitProgram()
// {
//     alert(toFahrenheitProgram(32));
// }

function toCelsius(fahrenheit) {
    let value = (fahrenheit - 32) * 5 / 9;
    return value.toFixed(2) + "°C";
}

function toFahrenheit(celsius) {
    let value = (celsius * 9) / 5 + 32;
    return value.toFixed(2) + "°F";
}

function display(elementId, value) {
    document.getElementById(elementId).innerHTML = "<b>" + value + "</b>";
}

function toCelsiusProgram(value) {
    let result = toCelsius(value);
    alert("ผลลัพธ์: " + result); // ✅ แสดงผลลัพธ์จริง
}

function toFahrenheitProgram() {
    let result = toFahrenheit(32);
    alert("ผลลัพธ์: " + result); // ✅ แสดงผลลัพธ์จริง
}

