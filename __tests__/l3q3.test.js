import ArrayBasedLinkedList from "../src/l3q3";

let l;

beforeEach(() => {
    l = new ArrayBasedLinkedList();
})

test("Deve iniciar vazia", () => {
    expect(l.isEmpty()).toBe(true);
    expect(l.length()).toBe(0);
    expect(() => l.removeFirst()).toThrow("Underflow");
    expect(() => l.removeLast()).toThrow("Underflow");
})

test("Deve adicionar elementos", () => {
    l.add('A');
    l.add('B');
    l.add('C');
    l.add('D');
    l.append('E');
    expect(l.length()).toBe(5);
    expect(l.isFull()).toBe(true);
    expect(l.isEmpty()).toBe(false);
    expect(l.head().dado).toBe('D');
    expect(l.head().prox.dado).toBe('C');
    expect(() => l.add('F')).toThrow('Overflow');
})

test("Deve remover elementos", () => {
    l.add('A');
    l.add('B');
    l.add('C');
    l.add('D');
    l.append('E');
    let prev = l.head();
    l.removeFirst();
    expect(l.length()).toBe(4);
    expect(l.isFull()).toBe(false);
    expect(l.head().dado).toBe('C');
    expect(prev.prox).toBe(null);
    l.removeLast();
    let current = l.head();
    while(current.prox != null) {
        current = current.prox;
    }
    expect(current.dado).toBe('A');
})

test("Deve adicionar elementos em uma posição", () => {
    l.addAt('A', 9);
    expect(l.head().dado).toBe('A'); 
    l.addAt('B', 0);
    expect(l.head().dado).toBe('B');
    expect(l.head().prox.dado).toBe('A');
    l.addAt('C', -2);
    expect(l.head().dado).toBe('C');
    l.addAt('D', 1);
    let node = l.head().prox;
    expect(l.head().dado).toBe('C');
    expect(node.dado).toBe('D');
    expect(node.prox.dado).toBe('B');
})

test("Deve remover elementos em uma posição", () => {
    l.append('A');
    l.append('B');
    l.append('C');
    l.append('D');
    l.removeAt(2);
    expect(l.head().prox.prox.dado).toBe('D');
    expect(l.length()).toBe(3);
    l.append('E');
    l.append('F');
    expect(l.isFull()).toBe(true);
    l.removeAt(0);
    expect(l.head().dado).toBe('B');
})