const convertBtn = document.querySelector(".convertBtn");
const output = document.querySelector(".output");
const inputValue = document.querySelector(".inputValue");
const convert = document.querySelector("#convert");
const container = document.querySelector(".container");
const theme = document.querySelector(".theme");
const bx = document.querySelector(".bx")

convertBtn.addEventListener("click", getConvertBtn);
theme.addEventListener("click", togggleTheme);

function getConvertBtn() {

    if (convert.value === "kilogram") {
        let calculation = inputValue.value / 1000
        output.innerHTML = `${inputValue.value}g = ${calculation} Kilograms`
    }

    else if (convert.value === "miligram") {
        let calculation = inputValue.value * 1000
        output.innerHTML = `${inputValue.value}g = ${calculation} Miligrams`
    }
    else if (convert.value === "ounce") {
        let calculation = inputValue.value * 0.03527337
        output.innerHTML = `${inputValue.value}g = ${calculation} Ounces`
    }

    else if (convert.value === "tonne") {
        let calculation = inputValue.value * 0.0000011
        output.innerHTML = `${inputValue.value}g = ${calculation} Tonnes`
    }

    else if (convert.value === "pound") {
        let calculation = inputValue.value * 0.00220462
        output.innerHTML = `${inputValue.value}g = ${calculation} Pounds`
    }

    else {
        alert("Please Select Input")
    }
}

function togggleTheme() {
    container.classList.toggle("light");

    bx.classList.toggle("bxs-sun");
}