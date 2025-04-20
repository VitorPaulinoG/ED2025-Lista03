import Cadastro from "../src/l3q8";


let c;

beforeEach(() => {
    c = new Cadastro();
})

test("Deve inserir elementos no cadastro", () => {
    c.inserir('Fulano', 21);
    c.inserir('Beltrano', 28);
    c.inserir('Cicrano', 20);
    c.inserir('Crispim', 23);

    expect(c.lista.head.prox.dado.nome).toBe('Fulano');
    expect(c.toString()).toBe('{ nome: Fulano, idade: 21} { nome: Beltrano, idade: 28} { nome: Cicrano, idade: 20} { nome: Crispim, idade: 23}')
})

test("Deve ordenar por nome", ()=> {
    c.inserir('Fulano', 21);
    c.inserir('Beltrano', 28);
    c.inserir('Cicrano', 20);
    c.inserir('Crispim', 23);
    let ordenado = c.ordenarPorNome();

    let result = '';
    let current = ordenado.head.prox;
    while(current != null) {
        result += 
            '{ nome: ' + current.dado.nome + 
            ', idade: ' + current.dado.idade + '} ';
        current = current.prox;
    }
    result = result.trim();
    expect(result.toString()).toBe('{ nome: Beltrano, idade: 28} { nome: Cicrano, idade: 20} { nome: Crispim, idade: 23} { nome: Fulano, idade: 21}')
    
});


test("Deve ordenar por idade", ()=> {
    c.inserir('Fulano', 21);
    c.inserir('Beltrano', 28);
    c.inserir('Cicrano', 20);
    c.inserir('Crispim', 23);
    let ordenado = c.ordenarPorIdade();

    let result = '';
    let current = ordenado.head.prox;
    while(current != null) {
        result += 
            '{ nome: ' + current.dado.nome + 
            ', idade: ' + current.dado.idade + '} ';
        current = current.prox;
    }
    result = result.trim();
    expect(result.toString()).toBe('{ nome: Cicrano, idade: 20} { nome: Fulano, idade: 21} { nome: Crispim, idade: 23} { nome: Beltrano, idade: 28}')
    
});
