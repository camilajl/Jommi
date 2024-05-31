export function isMobile() {
  const anchoVentana = window.innerWidth;
  const puntoCorte = 768;
  if (anchoVentana < puntoCorte) {
    return true;
  } else {
    return false;
  }
}
