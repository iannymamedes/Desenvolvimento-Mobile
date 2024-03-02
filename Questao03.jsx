/* Escreva uma função de componente utilizando arrow function que renderize um botão
e utilize uma função de callback em uma única linha para manipular o evento de clique. */



import React from 'react';

const MeuComponente = () => (
    <button onClick = {() => console.log('Botão clicado')}>
        Clique aqui
    </button>
);

export default MeuComponente;