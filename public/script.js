// CATÁLOGO JSON

const catalogo = [
    {
        id: 1,
        titulo: "Harry Potter e o Cálice de Fogo",
        tipo: "filme",
        ano: 2005,
        generos: ["fantasia", "aventura"],
        nota: 9.5,
        assistido: true
    },

    {
        id: 2,
        titulo: "Homem-Aranha: Sem Volta Para Casa",
        tipo: "filme",
        ano: 2021,
        generos: ["ação", "aventura"],
        nota: 9.3,
        assistido: true
    },

    {
        id: 3,
        titulo: "You",
        tipo: "serie",
        ano: 2018,
        generos: ["suspense", "drama"],
        nota: 8.9,
        assistido: true
    },

    {
        id: 4,
        titulo: "Stranger Things",
        tipo: "serie",
        ano: 2016,
        generos: ["terror", "ficção"],
        nota: 9.0,
        assistido: true
    },

    {
        id: 5,
        titulo: "Vingadores: Ultimato",
        tipo: "filme",
        ano: 2019,
        generos: ["ação", "ficção"],
        nota: 9.1,
        assistido: true
    },

    {
        id: 6,
        titulo: "Interestelar",
        tipo: "filme",
        ano: 2014,
        generos: ["ficção científica", "drama"],
        nota: 9.0,
        assistido: false
    },
    {
        id: 7,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["drama", "crime"],
        nota: 9.8,
        assistido: false
    },
];


// ACESSO AOS DADOS

console.log("CATÁLOGO COMPLETO:");
console.log(catalogo);


// título do primeiro item
console.log("Primeiro título:");
console.log(catalogo[0].titulo);


// ano do último item
console.log("Ano do último item:");
console.log(catalogo[catalogo.length - 1].ano);


// segundo gênero do terceiro item
if (catalogo[2].generos[1]) {

    console.log("Segundo gênero do terceiro item:");
    console.log(catalogo[2].generos[1]);

} else {

    console.log("O terceiro item possui apenas um gênero.");

}

// FOREACH

console.log("LISTAGEM DOS TÍTULOS:");

catalogo.forEach(item => {

    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);

});


// MAP

const titulosEmCaixaAlta = catalogo.map(item =>
    item.titulo.toUpperCase()
);

console.log("TÍTULOS EM CAIXA ALTA:");
console.log(titulosEmCaixaAlta);


// FILTER

const naoAssistidos = catalogo.filter(item =>
    item.assistido === false
);

console.log("QUANTIDADE NÃO ASSISTIDOS:");
console.log(naoAssistidos.length);


// FIND

const itemNotaAlta = catalogo.find(item =>
    item.nota >= 9
);

console.log("ITEM COM NOTA MAIOR OU IGUAL A 9:");

if (itemNotaAlta) {

    console.log(itemNotaAlta.titulo);
    console.log(itemNotaAlta.nota);

} else {

    console.log("Nenhum item encontrado.");

}

// REDUCE


// média geral

const somaNotas = catalogo.reduce((acumulador, item) => {

    return acumulador + item.nota;

}, 0);

const mediaGeral = somaNotas / catalogo.length;

console.log("MÉDIA GERAL:");
console.log(mediaGeral.toFixed(2));


// média assistidos

const assistidos = catalogo.filter(item =>
    item.assistido
);

const somaAssistidos = assistidos.reduce((acumulador, item) => {

    return acumulador + item.nota;

}, 0);

const mediaAssistidos = somaAssistidos / assistidos.length;

console.log("MÉDIA ASSISTIDOS:");
console.log(mediaAssistidos.toFixed(2));

// SOME E EVERY

const existeAntigo = catalogo.some(item =>
    item.ano < 2000
);

const todosTemGenero = catalogo.every(item =>
    item.generos.length > 0
);

console.log("EXISTE ITEM ANTES DE 2000?");
console.log(existeAntigo);

console.log("TODOS POSSUEM GÊNERO?");
console.log(todosTemGenero);

// RESUMO NA TELA

const totalFilmes = catalogo.filter(item =>
    item.tipo === "filme"
).length;

const totalSeries = catalogo.filter(item =>
    item.tipo === "serie"
).length;


// ranking top 3

const ranking = [...catalogo]

.sort((a, b) => b.nota - a.nota)

.slice(0, 3);


// saída na tela

const output = document.getElementById("output");

output.innerHTML = `
    <h2>Resumo do Catálogo</h2>

    <p><strong>Total de itens:</strong> ${catalogo.length}</p>

    <p><strong>Quantidade de filmes:</strong> ${totalFilmes}</p>

    <p><strong>Quantidade de séries:</strong> ${totalSeries}</p>

    <p><strong>Não assistidos:</strong> ${naoAssistidos.length}</p>

    <p><strong>Média geral:</strong> ${mediaGeral.toFixed(2)}</p>

    <h3>Top 3 melhores notas</h3>

    <ol>
        ${ranking.map(item => `
            <li>${item.titulo} - Nota ${item.nota}</li>
        `).join("")}
    </ol>
`;