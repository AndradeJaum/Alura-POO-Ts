export class Cliente {
    nome;
    private readonly _cpf;

    get cpf() {
        return this._cpf;
    }

    constructor(nome: string, cpf: number) {
        this.nome = nome;
        this._cpf = cpf;
    }
}