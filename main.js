function search() {
    alert("Alert from JS file");
}

function updateHeading() {
    document.getElementById('heading').innerHTML = 'Heading changed with JS';
}

const getData = async () => {
    const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
    myJson.data.forEach(item => {
        var yearOption = document.createElement("option");
        yearOption.value = item.Year;
        yearOption.innerHTML = item.Year;
        var select = document.getElementById("Year");
        select.appendChild(yearOption);
    });
    // do something with myJson
  }

