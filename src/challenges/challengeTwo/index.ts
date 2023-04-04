// Enunciado: Você tem uma lista de treinadores de Pokémons, cada um com seu 
// nome, cidade e uma lista de Pokémons capturados. Sua tarefa é escrever uma 
// função chamada encontrarTreinadorPorCidade que recebe um array de objetos 
// representando os treinadores e o nome de uma cidade, e retorna um novo array 
// com todos os treinadores que são daquela cidade, juntamente com seus 
// respectivos Pokémons capturados.

const treinadores = [
  {
    nome: "Ash",
    cidade: "Pallet Town",
    pokemons: [
      { nome: "Pikachu", tipo: "elétrico", nivel: 7, pontosDeVida: 40 },
      { nome: "Charmander", tipo: "fogo", nivel: 5, pontosDeVida: 30 },
    ],
  },
  {
    nome: "Misty",
    cidade: "Cerulean City",
    pokemons: [
      { nome: "Squirtle", tipo: "água", nivel: 10, pontosDeVida: 50 },
      { nome: "Staryu", tipo: "água", nivel: 8, pontosDeVida: 35 },
    ],
  },
  {
    nome: "Brock",
    cidade: "Pewter City",
    pokemons: [
      { nome: "Onix", tipo: "pedra", nivel: 12, pontosDeVida: 60 },
      { nome: "Geodude", tipo: "pedra", nivel: 6, pontosDeVida: 25 },
    ],
  },
];
const cidade = "Pallet Town";

export const encontrarTreinadorPorCidade = () => {
  //Write the code here!
};

encontrarTreinadorPorCidade();
