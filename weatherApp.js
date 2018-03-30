$(document).ready(function(){
    var myKey = "93c1fb472f228c8a1d2ce916f69a96fc";
    $("form").submit(function(){
        var starting = "http://api.openweathermap.org/data/2.5/weather?q=";
        var place = $("#city").val();
        console.log(place);
        var linkData = starting + place + "&&appid=" + myKey;
        console.log(linkData);
        $.get(linkData, function(res){
                console.log(res);
                var kelvin = res.main.temp;
                console.log(kelvin);
                var fahrenheit = Math.floor((kelvin * 9 / 5) - 460);
                $("#output").html("<h4>"+fahrenheit+ " " + "F</h4>");
        }, "json")
        return false;
    });
});