document.addEventListener("DOMContentLoaded", function () {
    
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieBanner.classList.remove('hidden')
    }

    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.classList.add('hidden')
    });
});
