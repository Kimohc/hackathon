function Start() {
    var e = document.getElementById("Category").value;
    alert(e);

    if(e == "Politiek")
    {
    window.location.href = "../HTML/SpelPolitiek.html";
    }
    if(e == "Sport")
    {
        window.location.href = "../HTML/SpelSport.html"; 
    }
    if(e == "Custom")
    {
        window.location.href = "../HTML/SpelOverig.html"; 
    }
    if(e == "Custom-veranderen")
    {
        window.location.href = "../HTML/Custom-Veranderen.html"; 
    }
}

function update() {
    var select = document.getElementById('Category');
    var option = select.options[select.selectedIndex];

    if(option.value == "Custom-veranderen"){
        document.getElementById('startButton').innerText = 'Verander Quiz!';
    }
    else{
        document.getElementById('startButton').innerText = 'Start Quiz!';
    }
}

update();