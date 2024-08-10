var msgCookies = document.getElementById('cookies-msg');

localStorage.removeItem('lgpd');

function aceito() {
    localStorage.lgpd = "sim";
    msgCookies.classList.remove('mostrar');
}

if (localStorage.lgpd === 'sim') {
    msgCookies.classList.remove('mostrar');
} else {
    msgCookies.classList.add('mostrar');
}