import reverterLista from "../src/l3q4";
import SimplyLinkedList from "../src/SimplyLinkedList";

let l;

beforeEach(() => {
    l = new SimplyLinkedList();
})

test("Deve reverter os nós", () => {
    l.append('A');
    l.append('B');
    l.append('C');
    l.append('D');
    l.append('E');
    l.append('F');
    expect(l.toString()).toBe("A B C D E F");
    reverterLista(l);
    expect(l.head.prox.dado).toBe("F");
    expect(l.toString()).toBe("F E D C B A");
});