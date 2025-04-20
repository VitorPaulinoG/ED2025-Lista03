import SimplyLinkedList from './SimplyLinkedList'

class Fila {
    constructor() {
        this.lista = new SimplyLinkedList();
    }

    enqueue(elemento) {
        this.lista.append(elemento);
    }

    dequeue(){
        if(this.isEmpty()) throw new Error("Queue Underflow");
        let result = this.lista.head.prox;
        this.lista.removeFirst();
        return result.dado;
    }

    front(){
        let result = this.lista.head.prox;
        return result.dado;
    }
    
    length() {
        return this.lista.getLength();
    }

    isEmpty() {
        return this.lista.isEmpty();
    }
    
    clear() {
        this.lista.clear();
    }
    
    toString() {
        let result = '';
        let current = this.lista.head.prox;
        while(current != null) {
            result += current.dado + ' ',
            current = current.prox;
        } 
        return result.trim();
    }
}

export default Fila;