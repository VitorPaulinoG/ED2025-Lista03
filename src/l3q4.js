
const reverterLista = (lista) => {
    let node = lista.head.prox;
    reverter(lista, node);
}

const reverter = (lista, node) => {
    if (node.prox === null) {
        lista.head.prox = node;
        return node;
    }
    let result = reverter(lista, node.prox);
    node.prox = null;
    result.prox = node;
    return node;
}

export default reverterLista;