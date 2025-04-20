import LinkedListNode from "./LinkedListNode";
import SimplyLinkedList from "./SimplyLinkedList";

class ListaString extends SimplyLinkedList {
    setString(string) {
        for(let char of string) {
            this.append(char);
        }
    }
    
    substring(a, b) {
        if(a < 0) throw new Error("A has to be greater than 0");
        if(b > this.getLength()) throw new Error("B has to be less or equal to length");

        let l = new ListaString();
        let current = this.head.prox;
        for (let i = 0; i < a; i++) {
            current = current.prox;
        }

        for (let i = a; i < b; i++) {
            l.append(current.dado);
            current = current.prox;
        }
        return l; 
    }

}

export default ListaString;