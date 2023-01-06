function toggleMode(e){
    document.body.classList.toggle("darkMode");
    document.getElementById("mode").classList.toggle("btn-outline-dark");
    document.getElementById("mode").classList.toggle("btn-outline-light");
     let text =e.innerText;
     e.innerText = text =='Dark Mode' ? 'Light Mode' :'Dark Mode';
};

//weather
let x = document.getElementById('out');
            let y = document.getElementById('weather');
            function geolocation(){
                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(showPosition)
                }else{
                    x.innerText = "Geo Not Supported"
                }
            };

            function showPosition(data){
                
                let lat = data.coords.latitude;
                let lon = data.coords.longitude;
                const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
                //api calling
                fetch(url,{method:'GET'})
                //return promise
                .then((res) => res.json())
                //return data
                .then((data) => {
                   
                    let cityName = data.city.name;
                    let temp = data.list[0].temp.day
                    y.innerHTML = `<h5 style="color:white">${cityName}  ${temp} °C</h5>`
                })
            };