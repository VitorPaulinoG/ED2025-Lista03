import ListaDuplamenteLigada from "./ListaDuplamenteLigada";


class Conjunto {
    constructor() {
        this.dados = new ListaDuplamenteLigada();
    }

    add(elemento) {
        if (!this.has(elemento)) {
            this.dados.add(elemento);
        }
    }
    remove(elemento) {
        if (this.has(elemento)) {
            this.dados.remove(elemento);
        }
    }
    has(elemento) {
        return this.dados.search(elemento);
    }
    clear() {
        this.dados.clear();
    }
    length() {
        return this.dados.length();
    }
    values() {
        return this.dados.asArray();
    }
    union(conjuntoB) {

        let AuB = new Conjunto();
        let dadosA = this.values();
        let dadosB = conjuntoB.values();

        for (let a of dadosA) {
            AuB.add(a);
        }
        for (let b of dadosB) {
            AuB.add(b);
        }

        return AuB;
    }

    intersection(conjuntoB) {
        let AiB = new Conjunto();
        let dadosA = this.values();

        for (let a of dadosA) {
            if (conjuntoB.has(a)) {
                AiB.add(a);
            }
        }
        return AiB;
    }

    difference(conjuntoB) {
        let AdB = new Conjunto();
        let dadosA = this.values();

        for (let a of dadosA) {
            if (!conjuntoB.has(a)) {
                AdB.add(a);
            }
        }

        return AdB;
    }

    contains(conjuntoB) {
        let dadosB = conjuntoB.values();

        for (let b of dadosB) {
            if (!this.has(b)) {
                return false;
            }
        }
        return true;
    }

    isEqual(conjuntoB) {
        return this.contains(conjuntoB) && conjuntoB.contains(this);
    }

}

export default Conjunto;