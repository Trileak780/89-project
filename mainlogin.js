function addUser() {
    P1_name = document.getElementById("player1_name_input").value;
    P2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("P1_name", P1_name);
    localStorage.setItem("P2_name", P2_name);
    
    window.location ="game_page.html";
}
