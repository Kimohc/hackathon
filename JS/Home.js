function Start()
{
    const Values = document.getElementById('Category').value

    if(Values == "Sport")
    {
        window.location.href = '/HTML/SpelSport.html';
    }

    if(Values == "Film en Televisie")
    {
        window.location.href = '/HTML/SpelFilm.html';
    }

    if(Values == "Muziek")
    {
        window.location.href = '/HTML/SpelMuziek.html';
    }

    if(Values == "Algemene Kennis")
    {
        window.location.href = '/HTML/SpelAlgemeen.html';
    }
 
}