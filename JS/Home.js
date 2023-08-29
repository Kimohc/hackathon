function Start() {
    var e = document.getElementById("Category").value;
    alert(e);

    if(e == "Politiek")
    {
    window.location.href = "../HTML/SpelPolitiek.php";
    }
    if(e == "Sport")
    {
        window.location.href = "../HTML/SpelSport.php"; 
    }
    if(e == "Custom")
    {
        window.location.href = "../HTML/SpelOverig.php"; 
    }
    if(e == "Custom-veranderen")
    {
        window.location.href = "../HTML/Custom-Veranderen.php"; 
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