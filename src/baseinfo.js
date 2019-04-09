export function obtenerdiferenciaañio(year) {
    return new Date().getFullYear() - year;
}

export function calcularMarca( modelo ) {
    let incremento;

    switch (modelo) {
        case '1':
        incremento = 1.15;
        break;
        case '2':
            incremento = 1.30;
            break;       
        case '3':
            incremento = 1.05;
            break;
        default:
            break;
    }

    return incremento;
}
export function obtenerPlan( plan ) {
    return (plan === '1') ? 1.20 : 1.50;
}
export function primeraMayuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}