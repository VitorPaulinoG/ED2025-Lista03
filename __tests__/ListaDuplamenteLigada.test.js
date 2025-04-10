import ListaDuplamenteLigada from "../src/ListaDuplamenteLigada";

let l;

beforeEach(() => {
    l = new ListaDuplamenteLigada();
});

test("A lista recém instanciada é vazia", () => {
    expect(l.isEmpty()).toBe(true);
    l.add("A");
    expect(l.isEmpty()).toBe(false);
    l.removeFirst();
    expect(l.isEmpty()).toBe(true);
    l.add("B");
    expect(l.isEmpty()).toBe(false);
    l.removeLast();
    expect(l.isEmpty()).toBe(true);
})

