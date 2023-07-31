
function backPage() {
    window.history.back();
}


async function clickUrl(){
    const url = document.getElementById("shortner-url").value;

    let parsedUrl = new URL(url).pathname.replace("/", "")


    const response = await fetch("http://localhost:8080/getCount?shortUrl=" + parsedUrl);
    const conutUrlResponse = await response.json();
    const countIputUrl = document.getElementById("click-url");
 
 
    countIputUrl.classList.remove("d-none");
    countIputUrl.value = conutUrlResponse.urlAccessCount;
    

    
}


