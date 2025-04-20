import problemaJosephus from "../src/l3q7"

test("Deve resolver o problema de Josephus", () => {
    expect(problemaJosephus(7, 3))
        .toBe("Removidos: 3 6 2 7 5 1 \nQuem escapou: 4");
    expect(problemaJosephus(10, 5))
        .toBe("Removidos: 5 10 6 2 9 8 1 4 7 \nQuem escapou: 3");
})