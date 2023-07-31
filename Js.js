function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}


async function shortUrl(){
    const url = document.getElementById("long-url").value;
    const response = await fetch("http://localhost:8080/shortner?url=" + url);
   
    if (response.ok) {
        const shortUrlResponse = await response.json();
        const shortInputUrl = document.getElementById("short-url");
        shortInputUrl.classList.remove("d-none");
        shortInputUrl.value = "http://localhost:8080/" + shortUrlResponse.shortUrl;
    } else {
        const shortUrlResponse = await response.json();
        alert(shortUrlResponse + " Atenção!!: URL invalida"); // Exibe a mensagem de erro no front-end
    }
}
