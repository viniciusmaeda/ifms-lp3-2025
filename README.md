## Anotações da disciplina de Linguagem de Programação 3
#### Institituto Federal de Mato Grosso do Sul - Campus Aquidauana
#### Curso Técnico em Informática - 5º período - Matutino
#### Professor Vinícius Maeda

---

### Comandos básicos de prompt

Listar o conteúdo de um diretório (pasta).

Windows
```
dir
```

Windows/Linux
```
ls
```

Criar um novo diretório.

```
mkdir <nome-da-pasta>
```

Remover um diretório.

Windows
```
rmdir <nome-da-pasta>
```

Linux
```
rm -rf <nome-da-pasta>
```

Acessar uma pasta.

```
cd <nome-da-pasta>
```

Sair de uma pasta, retornando um nível.

```
cd ..
```


---

### NodeJS

Para instalar o NodeJS e obter maiores informações sobre a biblioteca, acesse o endereço [NodeJS](https://nodejs.org/).


Para iniciar um projeto Node, utilize uma das sintaxes abaixo. A primeira sintaxe irá solicitar dados para configurar o projeto Node. A segunda opção irá criar o projeto imediatamente com dados padrões. Os dados de configuração do projeto estarão disponíveis no arquivo **package.json**. 

Iniciar um projeto fornecendo dados manualmente
```
npm init
```

Iniciar um projeto imediatamente com dados padrões
```
npm init -y
```

### Reiniciar o servidor automaticamente - Nodemon
Para rodar servidores sem a necessidade de ficar intorrempondo e reinciando manualmente, pode-se utilizar o Nodemon. Para isso você deverá instalar o nodemon na pasta do projeto.
```
npm install --save-dev nodemon
```

Em seguida deverá alterar o arquivo package.json.
```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "nodemon <nome_do_arquivo.js>"
},
```

Feito isso basta executar o seguinte comando.
```
npm run dev
```

### Reiniciar o servidor automaticamente - node --watch

Outra possibilidade de reiniciar o servidor sem ter que interromper após cada mudança e através do argumento --watch do node. Para isso, basta execuar o seguinte comando.
```
node --watch nome-do-arquivo.js
```
Neste caso, o node ficará "monitorando" alterações que houverem no arquivo especificado. Ao detectar alterações, o próprio node irá reiniciar o servidor.

