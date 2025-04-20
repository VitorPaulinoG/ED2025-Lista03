import LinkedListNode from "./LinkedListNode";
import SimplyLinkedList from "./SimplyLinkedList";
class Circle extends SimplyLinkedList {
    constructor() {
        super();
        this.nodeA = this.head;
        this.nodeB = this.head.prox;
    }

    append(elemento) {
        let newNode = new LinkedListNode(elemento);
        if(this.isEmpty()) {
            this.head.prox = newNode;
            newNode.prox = this.head.prox;
        } else {
            let current = this.head;
            for(let i = 0; i < this.length; i++) {
                current = current.prox;                
            }
            current.prox = newNode;
            newNode.prox = this.head.prox;
        }
        this.length++;
    }

    removeBy(d) {
        for (let i = 0; i < d - 1; i++) {
            this.nodeA = this.nodeA.prox;
            this.nodeB = this.nodeA.prox;
        }
        let result = this.nodeB.dado;
        this.length--;

        if(this.nodeB === this.head.prox) {
            this.head.prox = this.nodeA;
            this.nodeA.prox = this.nodeB.prox;
            this.updateLast();
        } else {
            this.nodeA.prox = this.nodeB.prox;
        }

        return result;
    }

    updateLast() {
        let current = this.head;
        for(let i = 0; i < this.length; i++) {
            current = current.prox;
        }
        current.prox = this.head.prox;
    }

    isEmpty() {
        return this.length === 0;
    }

    toString() {
        let result = '';
        let current = this.head.prox;
        for(let i = 0; i < this.getLength(); i++) {
            result += current.dado + ' ';
            current = current.prox;
        }
        return result.trim();
    }
}

const problemaJosephus = (n, d) => {
    if (d >= n) throw new Error("D has to be less than N");
    let l = new Circle();
    for (let i = 0; i < n; i++) {
        l.append(i + 1);
    }

    let result = 'Removidos: ';
    while (l.getLength() > 1) {
        let removed = l.removeBy(d);
        result += removed + ' ';
    }
    result += '\nQuem escapou: ' + l.head.prox.dado;
    return result;
}

export default problemaJosephus;