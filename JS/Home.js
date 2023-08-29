

function Start() {
    var e = document.getElementById("Category").value;
    alert(e);

    if(e == "Politiek")
    {
    window.location.href = "/HTML/SpelPolitiek.html";
    }
    if(e == "Sport")
    {
        window.location.href = "/HTML/SpelSport.html"; 
    }
    if(e == "Overig")
    {
        window.location.href = "/HTML/SpelOverig.html"; 
    }
}






