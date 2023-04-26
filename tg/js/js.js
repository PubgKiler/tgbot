let tg = window.Telegram.WebApp;
let buy = document.getElementById("buy")
let order = document.getElementById("order")

buy.addEventListener("click", () => {
    document.getElementById("main").style.display = "none";
    document.getElementById("form").style.display = "block";
    document.getElementById("user_name").value = tg.initDataUnsefe.user.first_nome + " " + tg.initDataUnsefe.user.last_nome
});

order.addEventListener("click", () => {
    tg.clase
})