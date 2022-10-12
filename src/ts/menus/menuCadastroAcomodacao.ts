import Menu from "../interfaces/menu"

export default class MenuCadastroAcomodacao implements Menu {
    mostrar(): void {
        console.clear();
        console.log(`****************************`)
        console.log(`| Por favor, selecione uma opção...`)
        console.log(`----------------------`)
        console.log(`| Opções para acomodação:`)
        console.log(`----------------------`)
        console.log(`| 1 - Casal Simples`)
        console.log(`| 2 - Familia Simples`)
        console.log(`| 3 - Familia Mais`)
        console.log(`| 4 - Familia Super`)
        console.log(`| 5 - Solteiro Simples`)
        console.log(`| 6 - Solteiro Mais`)
        console.log(`****************************`)
        console.log(`| 0 - Voltar`)
        console.log(`----------------------`)
    }
}