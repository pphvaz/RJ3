class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf
    }

    get obterCpf() {
        return this.#cpf
    }

    obterUpperCase(atributo) {
        if (this[atributo] && typeof this[atributo] === 'string') {
            return this[atributo].toUpperCase()
        }
        return null;
    }

    obterLowerCase(atributo) {
        if (this[atributo] && typeof this[atributo] === 'string') {
            return this[atributo].toLowerCase();
        }
        return null;
    }

    detalhe = () => {
        return `
        Nome: ${this.nome}
        Estado: ${this.endereco.estado}
        ${Array.from(this.telefones).map(t => t.detalhe()).join("")}`;
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }

    obterUpperCase(atributo) {
        if (this[atributo] && typeof this[atributo] === 'string') {
            return this[atributo].toUpperCase()
        }
        return null;
    }

    obterLowerCase(atributo) {
        if (this[atributo] && typeof this[atributo] === 'string') {
            return this[atributo].toLowerCase();
        }
        return null;
    }

    detalhe = () => {
        return `ddd: ${this.ddd} número: ${this.numero}\n        `
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    obterUpperCase(atributo) {
        if (this[atributo] && typeof this[atributo] === 'string') {
            return this[atributo].toUpperCase()
        }
        return null;
    }

    obterLowerCase(atributo) {
        if (this[atributo] && typeof this[atributo] === 'string') {
            return this[atributo].toLowerCase();
        }
        return null;
    }
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }

    get obterCnpj() {
        return this.#cnpj
    }

    obterUpperCase(atributo) {
        if (this[atributo] && typeof this[atributo] === 'string') {
            return this[atributo].toUpperCase()
        }
        return null;
    }

    obterLowerCase(atributo) {
        if (this[atributo] && typeof this[atributo] === 'string') {
            return this[atributo].toLowerCase();
        }
        return null;
    }

    detalhe = () => {
        return `
        Razão Social: ${this.razaoSocial}
        Nome Fantasia: ${this.nomeFantasia}
        ----------------
        ${Array.from(this.clientes).map(c => c.detalhe()).join('\n')}`
    }
}

const enderecoEmpresa = new Endereco("SP", "São Paulo", "Av. Paulista", 1000);
const empresa = new Empresa("Minha Empresa Ltda", "Tech Solutions", "1234000199", enderecoEmpresa);

const telefoneEmpresa1 = new Telefone("12", "40028922");
const telefoneEmpresa2 = new Telefone("12", "30032211");

empresa.telefones.add(telefoneEmpresa1);
empresa.telefones.add(telefoneEmpresa2);

const clientes = [];

// Método automatizado para gerar diferentes nomes de rua

for (let i = 1; i <= 5; i++) {
    const enderecoCliente = new Endereco("SP", "São Paulo", `Rua Cliente ${i}`, i * 10);
    const cliente = new Cliente(`Cliente ${i}`, `123.456.78${i}-00`, enderecoCliente);

    const telefoneCliente1 = new Telefone("11", `98765432${i}`);
    const telefoneCliente2 = new Telefone("11", `99988877${i}`);

    cliente.telefones.add(telefoneCliente1);
    cliente.telefones.add(telefoneCliente2);

    empresa.clientes.add(cliente);
    clientes.push(cliente);
}

// Exibindo os detalhes da empresa
console.log(empresa.detalhe())