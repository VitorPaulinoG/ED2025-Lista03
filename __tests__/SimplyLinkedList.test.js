import SimplyLinkedList from "../src/SimplyLinkedList";

let l;
beforeEach(() => {
    l = new SimplyLinkedList();
});

test("Deve iniciar vazia", () => {
    expect(l.isEmpty()).toBe(true);
})

test("Deve adicionar elementos", () => {
    l.add('A');
    l.add('B');
    l.add('C');
    l.add('D');
    expect(l.getLength()).toBe(4);
    expect(l.isEmpty()).toBe(false);
    expect(l.head.prox.dado).toBe("D");
    l.append('E');
    expect(l.getLength()).toBe(5);
    let tempNode = l.head.prox;
    while(tempNode.prox != null) {
        tempNode = tempNode.prox;
    }
    expect(tempNode.dado).toBe('E');
});

test("Deve buscar elementos", () => {
    l.append('A');
    l.append('B');
    l.append('C');
    l.append('D');
    expect(l.search('C')).toBe(true);
});

test("Deve remover elementos", () => {
    expect(l.isEmpty()).toBe(true);
    l.removeFirst();
    expect(l.isEmpty()).toBe(true);
    l.append('A');
    l.append('B');
    l.append('C');
    l.append('D');
    l.removeFirst();
    l.removeFirst();
    expect(l.getLength()).toBe(2);
    expect(l.head.prox.dado).toBe('C');
    l.removeLast();
    expect(l.head.prox.prox).toBe(null);
    expect(l.getLength()).toBe(1);
    l.append('A');
    l.append('B');
    l.clear(); 
    expect(l.isEmpty()).toBe(true);
    expect(l.getLength()).toBe(0);
});

test("Deve adicionar elementos em uma posição", () => {
    l.addAt('A', 9);
    expect(l.head.prox.dado).toBe('A'); 
    l.addAt('B', 0);
    expect(l.head.prox.dado).toBe('B');
    expect(l.head.prox.prox.dado).toBe('A');
    l.addAt('C', -2);
    expect(l.head.prox.dado).toBe('C');
    l.addAt('D', 1);
    let node = l.head.prox.prox;
    expect(l.head.prox.dado).toBe('C');
    expect(node.dado).toBe('D');
    expect(node.prox.dado).toBe('B');
})

test("Deve remover elementos em uma posição", () => {
    l.append('A');
    l.append('B');
    l.append('C');
    l.append('D');
    l.removeAt(2);
    expect(l.head.prox.prox.prox.dado).toBe('D');
})