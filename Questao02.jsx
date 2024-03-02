/* Crie um contexto React para armazenar o tema atual da aplicação e um componente que use useContext para
acessar e exibir esse tema. */


import React, { createContext, useContext, useState } from 'react';

const TemaContexto = createContext();

const TemaProvedor = ({ children }) => {
    const [tema, ConfigTema] = useState ('claro');

    return (
        <TemaContexto.Provider value = {{ tema, ConfigTema }}>
            {children}
        </TemaContexto.Provider>
    );
};

const TemaExibicao = () => {
    const { tema } = useContext(TemaContexto);

    return (
        <div>
            <h2>Tema Atual</h2>
            <p>O tema atual da aplicação é: {tema}</p>
        </div>
    );
};

const App = () => {
    
    return (
        <TemaProvedor>
            <div>
                <h1>Minha Aplicação</h1>
                <TemaExibicao />
            </div>
        </TemaProvedor>
    ); 
};

export default App;