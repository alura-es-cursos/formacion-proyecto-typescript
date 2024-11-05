let saldo:number = 30000;

const elementoFecha = document.querySelector(".block-saldo time") as HTMLElement;
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

    if(elementoSaldo){
        elementoSaldo.textContent = formatearMoneda(saldo);
    }

    if (elementoFecha) {
        const fechaAcceso : Date = new Date()
        elementoFecha.textContent = formatearFecha(fechaAcceso,FormatoFecha.DIA_SEMANA_DIA_MES_ANIO);
    }


