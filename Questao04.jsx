/* Crie um componente que use useState para controlar
o estado de um campo de entrada e atualize seu valor
ao digitar, utilizando arrow functions. */


import React, { useState } from "react";

const Controlador = () => {
    const [valor, ConfigContador] = useState('');

    retunr (
        <div>
            <input
            type = "text"
            value = {valor}
            onChange = {(event) => ConfigContador(event.target.value)}
            placeholder = "Digite aqui!"/>

            <p>O valor digitado é: {valor}</p>
        </div>
    );
};

export default Controlador;