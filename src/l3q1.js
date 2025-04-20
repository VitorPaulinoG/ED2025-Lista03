import SimplyLinkedList from "./SimplyLinkedList";

class Pilha {
    constructor() {
        this.lista = new SimplyLinkedList();
    }

    push(elemento) {
        this.lista.add(elemento);
    }
    
    pop() {
        if(this.isEmpty()) throw new Error("Stack Underflow");
        let result = this.lista.head.prox;
        this.lista.removeFirst();
        return result.dado;
    }

    peek() {
        let result = this.lista.head.prox;
        return result.dado;
    }

    length() {
        return this.lista.getLength();
    }

    isEmpty() {
        return this.lista.isEmpty();
    }
    toString() {
        let result = '';
        let current = this.lista.head.prox;
        while(current != null) {
            result += current.dado + ' ';
            current = current.prox;
        }
        return result.trim();
    }
    clear() {
        this.lista.clear();
    }
}

export default Pilha;