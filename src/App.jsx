
import React from 'react';

import HookState01 from './components/UseState_01';

export default () => {
    return (
        <>
            <h1>React Hooks</h1>
            <HookState01 />
        </>
    )
}









/*
Aula 09
import React from "react";
import Article from "./components/Article";

export default function App() {

    let artigos = [
        { id: 1, titulo: "Um", subtitulo: "Sub Um" },
        { id: 2, titulo: "Dois", subtitulo: "Sub Dois" },
        { id: 3, titulo: "Três", subtitulo: "Sub Três" },
        { id: 4, titulo: "Quatro", subtitulo: "Sub Quatro" },
        { id: 5, titulo: "Cinco", subtitulo: "Sub Cinco" },
        { id: 6, titulo: "Seis", subtitulo: "Sub Seis" },
        { id: 7, titulo: "Sete", subtitulo: "Sub Sete" },
        { id: 8, titulo: "Oito", subtitulo: "Sub Oito" }
    ]

    let conteudo = artigos.map(art => <Article key={art.id} titulo={art.titulo} subtitulo={art.subtitulo} />)

    return (
        <>
            <h2>Olá, mundo!</h2>
            {conteudo}
        </>
    )
} */
