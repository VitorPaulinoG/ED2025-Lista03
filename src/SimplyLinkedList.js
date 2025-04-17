import LinkedListNode from "./LinkedListNode";

class SimplyLinkedList {
    constructor() {
        this.head = new LinkedListNode(null);
        this.length = 0;
    }

    add(elemento) {
        let newNode = new LinkedListNode(elemento);
        if(this.isEmpty()) {
            this.head.prox = newNode;
        } else {
            newNode.prox = this.head.prox;
            this.head.prox = newNode;
        }
        this.length++;
    }

    append(elemento) {
        let newNode = new LinkedListNode(elemento);
        if(this.isEmpty()) {
            this.head.prox = newNode;
        } else {
            let current = this.head.prox;
            while(current.prox != null) {
                current = current.prox;
            }
            current.prox = newNode;
        }
        this.length++;
    }

    addAt(elemento, pos) {
        let newNode = new LinkedListNode(elemento);
        if(pos >= this.length ) {
            this.append(newNode);
            return;
        } 
        
        if (pos <= 0) {
            this.add(newNode);
            return;
        }

        let nodeA = this.head;
        let nodeB = this.head.prox;
        let currentPos = 0;
        while(currentPos < pos) {
            nodeA = nodeB;
            nodeB = nodeB.prox;
            currentPos++;
        }

        nodeA.prox = newNode;
        newNode.prox = nodeB;
        this.length++;
    }

    removeFirst() {
        if(this.isEmpty()) return;
        let node = this.head.prox;
        this.head.prox = node.prox;
        node.prox = null;
        this.length--;
    }
    
    removeLast() {
        if(this.isEmpty()) return;
        let nodeA = this.head;
        let nodeB = this.head.prox;
        while(nodeB.prox != null) {
            nodeA = nodeB;
            nodeB = nodeB.prox;
        }
        nodeA.prox = null;
        this.length--;
    }

    removeAt(pos) {
        if(pos < 0 || pos >= this.length) return;
        
        let nodeA = this.head;
        let nodeB = this.head.prox;
        let currentPos = 0;
        while(currentPos < pos) {
            nodeA = nodeB;
            nodeB = nodeB.prox;
            currentPos++;
        }
        nodeA.prox = nodeB.prox;
        nodeB.prox = null;
        this.length--;
    }
    
    isEmpty() {
        return this.head.prox === null;
    }

    search(elemento) {
        let current = this.head.prox;
        while(current != null) {
            if(current.dado === elemento) {
                return true;
            }
            current = current.prox;
        }
        return false;
    }

    getLength() {
        return this.length;
    }

    clear() {
        this.head.prox = null;
        this.length = 0;
    }
}

export default SimplyLinkedList;