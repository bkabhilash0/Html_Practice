const t = document.getElementById("temp_value");
console.log(t.innerHTML);
let val;

const fetchData = async() => {
    const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m");
    const data = await res.json();
    t.innerHTML = data.elevation;
    console.log(data);
}

fetchData();