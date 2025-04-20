import ListaString from "../src/l3q6";
import LinkedListNode from "../src/LinkedListNode";


test("Deve criar a lista a partir do texto", () => {
    let l = new ListaString();
    l.setString("ABCDEFG");
    expect(l.head.prox.dado).toBe('A');
    expect(l.toString()).toBe('A B C D E F G');
})

test("Deve criar outra lista", () => {
    let l = new ListaString();
    l.setString("ABCDEFG");

    let result = l.substring(2, 6);
    expect(result.toString()).toBe('C D E F');
    expect(l.toString()).toBe('A B C D E F G');
})