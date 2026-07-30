class carroEletrico extends Carro{
    constructor(marca,modelo,ano,capacidadeBateria){
        super(marca,modelo,ano);
        this.capacidadeBateria =capacidededeBateria;

    }
    imprimirDetalhes() {
        return
        `
        marca:${this.marca}
        ano:${this.ano}
        capacidade de bateria:${this.capacidadedebateria}kwh
        `
    }
}

const carro1 = new carro(
    "toyota",
    "corolla",
    2022
);
const carro2 = new carro(
    "tesla",
    "model 3",
    2024,
    75
);
