

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
    if(e == "Custom")
    {
        window.location.href = "/HTML/SpelOverig.html"; 
    }
    if(e == "Custom-veranderen")
    {
        window.location.href = "/HTML/Custom-Veranderen.html"; 
    }
}






