import embaralharLista from "../src/l3q5";
import SimplyLinkedList from "../src/SimplyLinkedList";

let l;

beforeEach(() => {
    l = new SimplyLinkedList();
})

test('Deve manter o mesmo comprimento', () => {
    l.append('A');
    l.append('B');
    l.append('C');
    l.append('D');
    l.append('E');
    l.append('F');

    const embaralhada = embaralharLista(l);
    expect(embaralhada.getLength()).toBe(6);
});

test('Deve retornar null se a lista estiver vazia', () => {
    const embaralhada = embaralharLista(l);
    expect(embaralhada.head.prox).toBe(null);
});

test('Deve retornar a mesma lista se houver apenas um elemento', () => {
    l.append('A')
    const embaralhada = embaralharLista(l);
    expect(embaralhada.head.prox.dado).toBe('A');
    expect(embaralhada.getLength()).toBe(1);
});

test("Deve manter os mesmos elementos", () => {
    let elementos = ['A', 'B', 'C', 'D', 'E', 'F'];
    l.append(elementos[0]);
    l.append(elementos[1]);
    l.append(elementos[2]);
    l.append(elementos[3]);
    l.append(elementos[4]);
    l.append(elementos[5]);

    const embaralhada = embaralharLista(l);
    let current = embaralhada.head.prox;
    let combinados = 0;
    while(current != null) {
        if (elementos.find(x => x === current.dado)) {
            combinados++;
        }

        current = current.prox;
    }
    expect(combinados).toBe(6);
})

test("Deve embaralhar os elementos", () => {
    l.append('A');
    l.append('B');
    l.append('C');

    let possibilidades = ['A B C', 'A C B', 'B A C', 'B C A', 'C A B', 'C B A'];
    const embaralhada = embaralharLista(l);
    const combinou = possibilidades.find(x => x === embaralhada.toString()) != undefined;
    expect(combinou).toBe(true);
})