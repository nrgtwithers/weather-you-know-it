// Grab input values && Button On-click
$("#check-weather").on('click', function() {
    event.preventDefault();
    var inputSearch = $(".input-search").val().trim();
    console.log(inputSearch);
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+ inputSearch + "&units=imperial&appid=eec2d2bfb87b2a6c1390c5c9fbfd45ec", function(data){
        console.log(data);
        
        
    
        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var weather = data.weather[0].main;
        var temp = Math.floor(data.main.temp);
        var humidity = data.main.humidity;
    
        $('.icon').attr('src', icon);
        $('.weather').append(weather);
    
        // High & Lo Temperatures
        $('.temp').append('Current Temperature ' + temp + " °F");
    
        // Wind 
        // Humidity
        $('.humidity').append('Humidity ' + humidity + '%')
        // Dew Point
        // Pressure
        // Visibility
    
    
        // Maybe provide Tabs to show Hourly & 10 day forecast.
    
    });
});