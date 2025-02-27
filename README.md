## Atividade RJ3

Construindo objetos com atributos privados, métodos Get e Set

# Objetivo
Desenvolver um script que possa criar objetos dos tipos empresa, cliente, telefone e endereço.

# Requisitos
1. O cpf de um cliente e o CNPJ de uma empresa devem não podem mudar após a sua criação.
2. O cliente pode ter uma lista de telefones que pode crescer ou diminuir.
3. A classe Telefone e Endereço não devem possuir atributos privados
4. Deverão existir métodos construtores para cada Objeto.
5. Para os atributos privados, deverão existir métodos de acesso Get.
6. Para cada atributo deverão existir métodos que permitam recuperar o valor do atributo em caixa alta e caixa baixa.

# Observações da minha solução
- Para obedecer ao requisito 6., eu desenvolvi um método que pode ser utilizado para qualquer atributo, ao passar o nome do atributo como variável. Dessa forma eu não precisaria criar um método de Maiscula e Minuscula individualmente.
- Cada objeto tem o seu método detalhe, e objetos que tem listas chamam os métodos detalhes de cada um dos seus componentes utilizando-se do método MAP através de uma função lambda em conjunto com a Classe Array.