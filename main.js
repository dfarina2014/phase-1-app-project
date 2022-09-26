function search() {
    var select = document.getElementById("Year");
    var selectedYear = select.options[select.selectedIndex].value;
    var yearData = populationData.filter(data => data.Year == selectedYear);
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "cardText");
    var img = document.createElement("IMG");
    img.src = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png";
    img.classList.add("flag");
    var cardHeader = document.createElement("h4");
    cardHeader.innerHTML = yearData[0].Year;
    var cardPopulation = document.createElement("p");
    cardPopulation.innerHTML = yearData[0].Population;
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardHeader);
    cardDiv.appendChild(cardPopulation);
    var contentDiv = document.getElementById("content-wrapper");
    contentDiv.appendChild(cardDiv);
    contentDiv.addEventListener();
}

var populationData = [];

const getData = async () => {
    const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
    const myJson = await response.json(); //extract JSON from the http response
    populationData = myJson.data;
    myJson.data.forEach(item => {
        var yearOption = document.createElement("option");
        yearOption.value = item.Year;
        yearOption.innerHTML = item.Year;
        var select = document.getElementById("Year");
        select.appendChild(yearOption);
    });
    // do something with myJson
  }

