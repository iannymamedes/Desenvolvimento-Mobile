/* Crie um componente que utilize o contexto criado
anteriormente para alterar o tema da aplicação e um botão que,
ao ser clicado, altere o tema. */


import React, { useContext } from "react";
import { TemaContexto } from './Questao02'

const AlterarTema = () => {
    const { tema, ConfigTema } = useContext(TemaContexto);

    const alterarTema = () => {
        ConfigTema(tema == 'claro' ? 'escuro' : 'claro');
    };

    return (
        <div>
            <button onClick = {alterarTema}>
            Alterar Tema
            </button>
        </div>
    );
};

export default AlterarTema;
