export function isMobile() {
    var anchoVentana = window.innerWidth;
    var puntoCorte = 768;
    if (anchoVentana < puntoCorte) {
        return true;
    } else {
        return false;
    }
}
