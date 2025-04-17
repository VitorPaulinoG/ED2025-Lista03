import SimplyLinkedList from "../src/SimplyLinkedList";

let lista;
beforeEach(() => {
    lista = new SimplyLinkedList();
});

test("Deve iniciar vazia", () => {
    expect(lista.isEmpty()).toBe(true);
})

test("Deve adicionar elementos", () => {
    lista.add('A');
    lista.add('B');
    lista.add('C');
    lista.add('D');
    expect(lista.getLength()).toBe(4);
    expect(lista.isEmpty()).toBe(false);
    expect(lista.head.prox.dado).toBe("D");
    lista.append('E');
    expect(lista.getLength()).toBe(5);
    let tempNode = lista.head.prox;
    while(tempNode.prox != null) {
        tempNode = tempNode.prox;
    }
    expect(tempNode.dado).toBe('E');
});

test("Deve buscar elementos", () => {
    lista.append('A');
    lista.append('B');
    lista.append('C');
    lista.append('D');
    expect(lista.search('C')).toBe(true);
});

test("Deve remover elementos", () => {
    expect(lista.isEmpty()).toBe(true);
    lista.removeFirst();
    expect(lista.isEmpty()).toBe(true);
    lista.append('A');
    lista.append('B');
    lista.append('C');
    lista.append('D');
    lista.removeFirst();
    lista.removeFirst();
    expect(lista.getLength()).toBe(2);
    expect(lista.head.prox.dado).toBe('C');
    lista.removeLast();
    expect(lista.head.prox.prox).toBe(null);
    expect(lista.getLength()).toBe(1);
    lista.append('A');
    lista.append('B');
    lista.clear(); 
    expect(lista.isEmpty()).toBe(true);
    expect(lista.getLength()).toBe(0);
});