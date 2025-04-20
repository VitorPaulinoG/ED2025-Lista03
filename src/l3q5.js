import SimplyLinkedList from './SimplyLinkedList';

const embaralharLista = (lista) => {
    let length = lista.length;
    let l = new SimplyLinkedList();
    l.head.prox = embaralhar(lista);
    l.length = length; 
    return l;
} 

const embaralhar = (lista) => {
    if(lista.isEmpty()) return null;
    if(lista.getLength() === 1) {
        return lista.head.prox;
    }

    let random = Math.floor(Math.random() * lista.getLength());

    let current = lista.head.prox;
    for (let i = 0; i < random; i++) {
        current = current.prox;
    }
    lista.removeAt(random);

    current.prox = embaralhar(lista);
    return current;
}

export default embaralharLista;