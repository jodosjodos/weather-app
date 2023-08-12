const apiKey = "5e5e7241093f170e8e766240ac119f89";

const getValue = (e) => {
  const inputValue = e.target.value;
  if (!inputValue) {
    alert("Please provide a value");
  }
};

const performSearch = async () => {
  const inputValue = document.getElementById("city").value;
  if (inputValue) {
    showLoading(); // Show the loading indicator

    try {
      const result = await makeCall(inputValue ? inputValue : "Kigali");
      const dayDateTimestamp = result.dt * 1000;
      const dayDate = new Date(dayDateTimestamp);
      const formattedDayDate = dayDate.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      const sunriseTimestamp = result.sys.sunrise * 1000;
      const sunsetTimestamp = result.sys.sunset * 1000;
      const sunriseTime = new Date(sunriseTimestamp);
      const sunsetTime = new Date(sunsetTimestamp);

      const formattedSunriseTime = sunriseTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      const formattedSunsetTime = sunsetTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      const cloudPercentage = result.clouds.all;
      const windSpeed = result.wind.speed;

      const temperature = result.main.temp;
      const humidity = result.main.humidity;
      const country = result.sys.country;
      const name = result.name;

      console.log("cloud", cloudPercentage);
      console.log("wind ", windSpeed);
      console.log("tem", temperature);
      console.log("Sunrise:", formattedSunriseTime);
      console.log("Sunset:", formattedSunsetTime);
      console.log("date", formattedDayDate);
      console.log("country", country);

      const h3Value = document.querySelector(".location");
      h3Value.textContent = name;
      const date = document.querySelector(".date");
      date.textContent = formattedDayDate;
      const temperatureH = document.querySelector(".temp");
      temperatureH.textContent = `${temperature}°C`;
      const windSpeedH = document.querySelector(".wind");
      windSpeedH.textContent = windSpeed;
      const clodudH = document.querySelector(".cloud");
      clodudH.textContent = `${cloudPercentage}%`;
      const humidityH = document.querySelector(".humidity");
      humidityH.textContent = `${humidity}%`;
      const sunriseH = document.querySelector(".sunrise");
      sunriseH.textContent = formattedSunriseTime;
      const sunsetH = document.querySelector(".sunset");
      sunsetH.textContent = formattedSunsetTime;

      //   handle images
      const tempImage = document.querySelector(".sunImage");
      if (temperature < 20) {
        tempImage.src = "./rain.png";
      } else {
        tempImage.src = "./sun.png";
      }
    } catch (error) {
      console.log(error);
    }

    hideLoading(); // Hide the loading indicator
  } else {
    alert("Please provide a value");
  }
};


const loaderFunction=async()=>{
    const inputValue = getRandomCity(   )
  if (inputValue) {
    showLoading(); // Show the loading indicator

    try {
      const result = await makeCall(inputValue );
      const dayDateTimestamp = result.dt * 1000;
      const dayDate = new Date(dayDateTimestamp);
      const formattedDayDate = dayDate.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      const sunriseTimestamp = result.sys.sunrise * 1000;
      const sunsetTimestamp = result.sys.sunset * 1000;
      const sunriseTime = new Date(sunriseTimestamp);
      const sunsetTime = new Date(sunsetTimestamp);

      const formattedSunriseTime = sunriseTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      const formattedSunsetTime = sunsetTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      const cloudPercentage = result.clouds.all;
      const windSpeed = result.wind.speed;

      const temperature = result.main.temp;
      const humidity = result.main.humidity;
      const country = result.sys.country;
      const name = result.name;

      console.log("cloud", cloudPercentage);
      console.log("wind ", windSpeed);
      console.log("tem", temperature);
      console.log("Sunrise:", formattedSunriseTime);
      console.log("Sunset:", formattedSunsetTime);
      console.log("date", formattedDayDate);
      console.log("country", country);

      const h3Value = document.querySelector(".location");
      h3Value.textContent = name;
      const date = document.querySelector(".date");
      date.textContent = formattedDayDate;
      const temperatureH = document.querySelector(".temp");
      temperatureH.textContent = `${temperature}°C`;
      const windSpeedH = document.querySelector(".wind");
      windSpeedH.textContent = windSpeed;
      const clodudH = document.querySelector(".cloud");
      clodudH.textContent = `${cloudPercentage}%`;
      const humidityH = document.querySelector(".humidity");
      humidityH.textContent = `${humidity}%`;
      const sunriseH = document.querySelector(".sunrise");
      sunriseH.textContent = formattedSunriseTime;
      const sunsetH = document.querySelector(".sunset");
      sunsetH.textContent = formattedSunsetTime;

      //   handle images
      const tempImage = document.querySelector(".sunImage");
      if (temperature < 20) {
        tempImage.src = "./rain.png";
      } else {
        tempImage.src = "./sun.png";
      }
    } catch (error) {
      console.log(error);
    }

    hideLoading(); // Hide the loading indicator
  } else {
    alert("Please provide a value");
  }
}
const makeCall = async (locationName) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${apiKey}&units=metric`;
  const res = await fetch(apiUrl);
  const result = await res.json();
  console.log(result);
  return result; // Return the API response
};

const showLoading = () => {
  const loadingDiv = document.querySelector(".loading");
  const dataDiv = document.querySelector(".dataDiv");
  dataDiv.style.display = "none";
  loadingDiv.style.display = "block";
};

const hideLoading = () => {
  const loadingDiv = document.querySelector(".loading");
  const dataDiv = document.querySelector(".dataDiv");
  dataDiv.style.display = "flex";
  loadingDiv.style.display = "none";
};


const getRandomCity = () => {
  const cities = ["Kigali", "Bujumbura", "Kinshasa","Nairobi","Dodoma"];
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
};


window.addEventListener("load",loaderFunction)