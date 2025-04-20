import Fila from "../src/l3q2";

let f;

beforeEach(() => {
    f = new Fila();
})

test("Deve iniciar vazia", () => {
    expect(f.isEmpty()).toBe(true);
    expect(f.length()).toBe(0);
    expect(() => f.dequeue()).toThrow("Queue Underflow");
})

test("Deve adicionar elementos no topo", () => {
    f.enqueue('A');
    f.enqueue('B');
    f.enqueue('C');
    f.enqueue('D');
    expect(f.front()).toBe('A');
    expect(f.length()).toBe(4);
    expect(f.toString()).toBe('A B C D')
})

test("Deve remover elementos do topo", () => {
    f.enqueue('A');
    f.enqueue('B');
    f.enqueue('C');
    f.enqueue('D');
    let front = f.dequeue();
    expect(f.length()).toBe(3);
    expect(f.front()).toBe('B');
    expect(front).toBe('A');
    f.clear();
    expect(f.length()).toBe(0);
    expect(f.isEmpty()).toBe(true);
})