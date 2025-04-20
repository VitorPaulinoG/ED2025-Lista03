import LinkedListNode from "./LinkedListNode";

class ArrayBasedLinkedList {
    constructor(size = 5) {
        this.size = size + 2;
        this.dados = [];
        this.start = 0;
        this.end = 1;
    }

    add(elemento) {
        if(this.isFull()) throw new Error("Overflow");
        let newNode = new LinkedListNode(elemento);
        if(!this.isEmpty())
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
        if(!this.isEmpty()) 
            this.dados[this.end - 1].prox = newNode;
        
        this.dados[this.end] = newNode;
        if(this.end === this.size - 1) {
            this.end = 0;
            return;
        }
        this.end++;
    }
    addAt(elemento, pos) {
        if(this.isFull()) throw new Error("Overflow");

        if(pos >= this.length()) {
            this.append(elemento);
            return;
        } 
        
        if (pos <= 0) {
            this.add(elemento);
            return;
        }

        let newNode = new LinkedListNode(elemento);
        
        let index = (this.start + 1 + pos >= this.size)? 
            this.size - (this.start + 1 + pos) : this.start + 1 + pos;

        let j = this.end;

        for(let i = this.end; i > index; i--) {
            if(j === 0) {
                this.dados[j] = this.dados[this.size - 1];
                j = this.size - 1;
            } else {
                this.dados[j] = this.dados[j - 1];
                j--;
            }
        }
        this.end++;
        this.dados[index] = newNode;
        newNode.prox = this.dados[j + 1];
        if(index === 0) {
            this.dados[this.size - 1].prox = newNode;
        } else {
            this.dados[index - 1].prox = newNode;
        }        
    }
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
        if(this.end - 1 <= 0) {
            this.dados[this.end + (this.size - 2)].prox = null;
        } else {
            this.dados[this.end - 2].prox = null;
        }

        if(this.end === 0) {
            this.end = this.size - 1;
        } else {
            this.end--;
        }
    }

    removeAt(pos) {
        if(pos < 0 || pos >= this.length()) return;
        
        let index = (this.start + 1 + pos >= this.size)? 
            this.size - (this.start + 1 + pos) : this.start + 1 + pos;

        this.dados[index].prox = null;
        for (let i = index; i < this.end - 1; i++) {
            this.dados[i] = this.dados[i + 1];
        }
        this.end--;
        if(index === 0 && this.size - 1 != this.start) {
            this.dados[this.size - 1].prox = this.dados[index];
        } else if(index - 1 != this.start){
            this.dados[index - 1].prox = this.dados[index];
        }
    }
    
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