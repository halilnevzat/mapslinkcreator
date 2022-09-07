 document.getElementById('olustur').onclick = function() {
    var boylam = document.getElementById("latitude").value;
    var enlem = document.getElementById("longitude").value;
    document.getElementById("googlemaps").href = "https://www.google.com/maps/search/?api=1&query=" + boylam + "," + enlem;
    document.getElementById("yandexmaps").href = "https://yandex.ru/maps/?pt=" + enlem + "," +  boylam + "&z=18&l=map";
    document.getElementById("applemaps").href = "http://maps.apple.com/?ll=" + boylam + "," + enlem;

    console.log(enlem,boylam);
 };

