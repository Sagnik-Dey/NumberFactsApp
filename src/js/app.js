const form = document.querySelector("#form");
const outputDiv = document.querySelector("#output");
const numberTxt = document.querySelector("#numberTxt")

form.addEventListener("submit", generateNumberFact);

function generateNumberFact(e)
{
    e.preventDefault();
    let number = numberTxt.value;
    let outputHtml = "";

    if (number === "")
    {
        outputHtml += `<h3> Enter a number to generate the fact </h3>`;
        outputDiv.innerHTML = outputHtml;
    }
    else
    {
        const url = `http://numbersapi.com/${number}/`;

        const factXhr = new XMLHttpRequest();
        factXhr.open("GET", url, true);

        factXhr.onload = function ()
        {
            outputHtml += `<h3> ${this.responseText} </h3>`
            outputDiv.innerHTML = outputHtml;
        }

        factXhr.send();
    }
}
