// program to check leap year

// Get button element and add click event listener on it and assign to element variable.
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", checkLeapYear);


function checkLeapYear(e) {
    e.preventDefault();

    // Show the result on this #result id.
    const result = document.querySelector('#result');

    // Get input year value from the input element.
    const year = Number(document.getElementById("year").value);

    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {

        console.log(`Input year ${year} is a Leap Year!`);
        result.innerHTML = `Input year <span style="color: #614f7e">${year}</span> is a Leap Year!`;

    } else {

        console.log(`Input year ${year} is not a Leap Year.`);
        result.innerHTML = `Input year <span style="color: #614f7e">${year}</span> is not a Leap Year.`;

    }
}










function getUrl(e) {


    // window.location.href: HTML DOM Window.location property returns a Location object that contains information about the current location of the document.
    const url1 = window.location.href;

    // Document.URL: The DOM URL property in HTML is used to return a string that contains the complete URL of the current document. The string also includes the HTTP protocol such as ( http://).
    const url2 = document.URL;


};

