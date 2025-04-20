import SimplyLinkedList from "./SimplyLinkedList";

class Cadastro {
    constructor() {
        this.lista = new SimplyLinkedList();
    }

    inserir(nome, idade) {
        this.lista.append({ 
            nome: nome, 
            idade: idade 
        });
    }
    
    ordenarPorNome() {
        const l = this.lista.copy();
        let current;
        let trocou;
        do {
            trocou = false;
            current = l.head.prox;

            while (current && current.prox) {
                if (current.dado.nome > current.prox.dado.nome) {
                    const temp = current.dado;
                    current.dado = current.prox.dado;
                    current.prox.dado = temp;
                    trocou = true;
                }
                current = current.prox;
            }
        } while (trocou);
        return l;
    }

    ordenarPorIdade() {
        const l = this.lista.copy(); 
        let current;
        let trocou;

        do {
            trocou = false;
            current = l.head.prox;

            while (current && current.prox) {
                if (current.dado.idade > current.prox.dado.idade) {
                    const temp = current.dado;
                    current.dado = current.prox.dado;
                    current.prox.dado = temp;
                    trocou = true;
                }
                current = current.prox;
            }
        } while (trocou);

        return l; 
    }

    toString() {
        let result = '';
        let current = this.lista.head.prox;
        while(current != null) {
            result += 
                '{ nome: ' + current.dado.nome + 
                ', idade: ' + current.dado.idade + '} ';
            current = current.prox;
        }

        return result.trim();
    }

}
export default Cadastro;