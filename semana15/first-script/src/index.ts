//Exercicio 1
//a) Não é possível atribuir um tipo diferente de string
const minhaString: string = 'Minha String'

//b) Não é possível atribuir um tipo diferente de number
const meuNumero: number = 7

//c) / d)
enum CORES_ARCO_IRIS {
    AZUL = 'Azul',
    ANIL = 'Anil',
    LARANJA = 'Laranja',
    AMARELO = 'Amarelo',
    VERDE = 'Verde',
    VERMELHO = 'Vermelho',
    VIOLETA = 'Violeta'
}

type Pessoa = {
    nome: string;
    idade: number;
    corFavorita: CORES_ARCO_IRIS
}
const pessoa1: Pessoa = {
    nome: 'Maiara',
    idade: 24,
    corFavorita: CORES_ARCO_IRIS.LARANJA
}

const pessoa2: Pessoa = {
    nome: 'Maraisa',
    idade: 22,
    corFavorita: CORES_ARCO_IRIS.VIOLETA
}

const pessoa3: Pessoa = {
    nome: 'Roberta',
    idade: 34,
    corFavorita: CORES_ARCO_IRIS.AMARELO
}

//Exercicio 2
//a) A entrada é any e saída um objeto
// com qualquer valor e number.
function obterEstatisticas(numeros: number[]):object {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:object = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//b)numerosOrdenados = tipagem array de number
//soma = tipagem number
//estatisticas = tipagem object

//c)
type Amostra = {
    numeros: number[];
    obterEstatisticas: (numeros: number[]) => object
}

//Exercicio 3
type Posts = {
    autor: string;
    texto: string;
}

const posts:Posts[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

//b) As entradas e saídas são os parâmetros 
function buscarPostsPorAutor(posts:Posts[], autorInformado:string) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
}
  console.table(buscarPostsPorAutor(posts,"Dobby"))
//Exercicio 4 
//a) aplicar o comando tsc na pasta local  
//b) teria que acessar o diretorio e usar o tsc
//c) Sim. Podemos usar o comando tsc com o nome do arquivo.
