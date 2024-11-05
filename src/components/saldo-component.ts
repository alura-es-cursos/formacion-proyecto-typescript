import { formatearMoneda, formatearFecha } from "../utils/formatters.js";
import { FormatoFecha } from "../types/FormatoFecha.js";
import Cuenta from "../types/Cuenta.js";



const elementoFecha = document.querySelector(".block-saldo time") as HTMLElement;
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

   

    if (elementoFecha) {
        
        elementoFecha.textContent = formatearFecha(Cuenta.getFechaDeAcceso(),FormatoFecha.DIA_SEMANA_DIA_MES_ANIO);
    }



renderizarSaldo();

export function renderizarSaldo():void {
    
    if(elementoSaldo){
        elementoSaldo.textContent = formatearMoneda(Cuenta.getSaldo());
    }
}

const saldoComponent = {
    actualizar(){
        renderizarSaldo();
    }
}

export default saldoComponent;
