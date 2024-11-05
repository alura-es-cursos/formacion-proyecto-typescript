import { TipoTransaccion } from "../types/TipoTransaccion.js";
import { Transaccion } from "../types/Transaccion.js";
 import saldoComponent from "./saldo-component.js";

import Cuenta from "../types/Cuenta.js";
import extractoComponent from "./extracto-component.js";

const elementoFormulario = document.querySelector(".block-nueva-transaccion form") as HTMLFormElement;

elementoFormulario.addEventListener("submit", function (event) {
try {

    event.preventDefault();
    
    if(!elementoFormulario.checkValidity()) {
        alert("Por favor, rellene todos los campos de la transacción");
        return;
    }
    
    const inputTipoTransaccion = elementoFormulario.querySelector("#tipoTransaccion") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputFecha = elementoFormulario.querySelector("#fecha") as HTMLInputElement;
    
    let tipoTransaccion = inputTipoTransaccion.value as TipoTransaccion;
    let valor = inputValor.valueAsNumber;
    let fecha:Date = new Date(inputFecha.value +"T00:00:00");
    
    
    
    const nuevaTransaccion : Transaccion = {
        tipoTransaccion: tipoTransaccion,
        valor:valor,
        fecha:fecha  
    }
    
    Cuenta.registrarTransaccion(nuevaTransaccion);
    
    console.log(nuevaTransaccion);
    
    saldoComponent.actualizar()

    extractoComponent.actualizar()
    
    elementoFormulario.reset();
} catch(error) {
    alert(error.message);
}
    
})