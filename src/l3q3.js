import LinkedListNode from "./LinkedListNode";

class ArrayBasedLinkedList {
    constructor(size = 7) {
        this.size = size;
        this.dados = [];
        this.start = 0;
        this.end = 1;
    }

    add(elemento) {
        if(this.isFull()) throw new Error("Overflow");
        let newNode = new LinkedListNode(elemento);
        newNode.prox = this.head();

        this.dados[this.start] = newNode;
        if(this.start === 0) {
            this.start = this.size - 1;
            return;
        }
        this.start--;
    }

    append(elemento) {
        if(this.isFull()) throw new Error("Overflow");
        let newNode = new LinkedListNode(elemento);
        
        this.dados[this.end - 1].prox = newNode;
        this.dados[this.end] = newNode;
        if(this.end === this.size - 1) {
            this.end = 0;
            return;
        }
        this.end++;
    }
    addAt(elemento, pos) {}
    removeFirst() {
        if(this.isEmpty()) throw new Error("Underflow");
        let prevHead = this.head();
        prevHead.prox = null;
        if(this.start === this.size - 1) {
            this.start = 0;
            return;
        }
        this.start++;
    }
    removeLast() {
        if(this.isEmpty()) throw new Error("Underflow");
        if(this.end - 1 === 0) {
            this.dados[this.size - 1].prox = null;
            th
            this.end = this.size - 1;
        } else {
            this.end--;
        }
        

    }
    removeAt() {}
    head() {
        if(this.isEmpty()) return null;
        if(this.start === this.size - 1) {
            return this.dados[0];
        }
        return this.dados[this.start + 1];
    }
    clear() {}
    isEmpty() {
        return this.length() === 0;
    }
    isFull() {
        return this.length() === this.size - 2;
    }
    length() {
        if(this.start < this.end) return this.end - this.start - 1;
        return this.size - this.start + this.end - 1;
    }
    toString() {}
}

export default ArrayBasedLinkedList;