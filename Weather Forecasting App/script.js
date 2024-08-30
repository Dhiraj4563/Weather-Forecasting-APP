
    const apikey="ee516f6b1e1c6a2a8d922da326d3a2aa";
    const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=London,uk";
    const searchBox=document.querySelector(".search input");
    const searchBtn=document.querySelector(".search button");

    async function checkweather(city){
        const response=await fetch(apiurl+city +`&appid=${apikey}`);
        var data=await response.json();
        console.log(data);

    document.querySelector(".city").innerHTMl=data.name;
    document.querySelector(".temp").innerHTMl=data.main.temp + "°C";
    document.querySelector(".humidity").innerHTMl=data.main.humidity + "%";
    document.querySelector(".wind").innerHTMl=data.wind.speed +" km/hr";
    }
    searchBtn.addEventListener("click",()=>{
        checkweather(searchBox.value);
    })

    checkweather();