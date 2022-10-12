import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import MenuCadastroAcomodacao from "../menus/menuCadastroAcomodacao";
import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastroDocumentosCliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";

export default class CadastroClienteTitular extends Processo {
  private acomodacao: Acomodacao[];
  constructor() {
    super();
    this.acomodacao = Armazem.InstanciaUnica.Acomodacoes;
  }

  processar(): void {
    console.log("Iniciando o cadastro de um novo cliente...");
    let nome = this.entrada.receberTexto("Qual o nome do novo cliente?");
    let nomeSocial = this.entrada.receberTexto(
      "Qual o nome social do novo cliente?"
    );
    let dataNascimento = this.entrada.receberData("Qual a data de nascimento?");
    let cliente = new Cliente(nome, nomeSocial, dataNascimento);

    this.processo = new CadastroEnderecoTitular(cliente);
    this.processo.processar();

    this.processo = new CadastrarDocumentosCliente(cliente);
    this.processo.processar();

    this.menu = new MenuCadastroAcomodacao();
    this.menu.mostrar();

    let entrada = this.entrada.receberNumero(
      "Qual acomodação o cliente deseja contratar?"
    );
    this.acomodacao.forEach((acomodacaoAlvo, index) => {
      if (entrada == index + 1) {
        let acomodacaoEscolha = new Acomodacao(
          acomodacaoAlvo.NomeAcomadacao,
          acomodacaoAlvo.CamaSolteiro,
          acomodacaoAlvo.CamaCasal,
          acomodacaoAlvo.Suite,
          acomodacaoAlvo.Climatizacao,
          acomodacaoAlvo.Garagem
        );
        cliente.Acomodacao = acomodacaoEscolha;
      }
    });

    let armazem = Armazem.InstanciaUnica;
    armazem.Clientes.push(cliente);

    console.log("Finalizando o cadastro do cliente...");
  }
}
