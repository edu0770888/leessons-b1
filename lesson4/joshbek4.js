function saveCookie() {
    let name = document.getElementById("name").value;
    document.cookie = "username=" + name;
}

function showCookie() {
    document.getElementById("result").textContent =
        document.cookie;
}