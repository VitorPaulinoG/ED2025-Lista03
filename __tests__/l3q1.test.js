import Pilha from "../src/l3q1";

let p;

beforeEach(() => {
    p = new Pilha();
})

test("Deve iniciar vazia", () => {
    expect(p.isEmpty()).toBe(true);
    expect(p.length()).toBe(0);
    expect(() => p.pop()).toThrow("Stack Underflow");
})

test("Deve adicionar elementos no topo", () => {
    p.push('A');
    p.push('B');
    p.push('C');
    p.push('D');
    expect(p.peek()).toBe('D');
    expect(p.length()).toBe(4);
    expect(p.toString()).toBe('D C B A')
})

test("Deve remover elementos do topo", () => {
    p.push('A');
    p.push('B');
    p.push('C');
    p.push('D');
    let top = p.pop();
    expect(p.length()).toBe(3);
    expect(p.peek()).toBe('C');
    expect(top).toBe('D');
    p.clear();
    expect(p.length()).toBe(0);
    expect(p.isEmpty()).toBe(true);
})