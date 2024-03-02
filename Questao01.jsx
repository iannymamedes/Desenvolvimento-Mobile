/* Escreva um componente de função React que use o 
hook useState para manter o estado de um contador e exiba o
valor desse contador em um elemento JSX. */


import React, { useState } from 'react';

const Contador = () => {
    const [contar, ConfigContador] = useState(0);

    return (
        <div>
            <p>Contagem: {contar}</p>
            <button onClick = {() => ConfigContador(contar + 1)}>
                Incrementar
            </button>
        </div>
    );
};

export default Contador;