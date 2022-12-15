function showCard(id) {
    document.getElementById("button" + id).style.display = "none";
    document.getElementById("card" + id).style.display = "block";
}

function showCards() {
    document.getElementById("pack").style.display = "none";
    document.getElementById("cards").style.display = "block";
    for (let i = 0; i < 5; i++) {
        document.getElementById("button" + i).style.display = "block";
    }
}