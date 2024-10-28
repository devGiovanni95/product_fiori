# Criação de uma Aplicação em SAP Fiori para Geração de Relatórios de Produtos

## Introdução

Este documento descreve o processo de criação de uma aplicação em SAP Fiori destinada à geração de relatórios de produtos. A aplicação permitirá que os usuários visualizem, filtrem e exportem dados relacionados aos produtos de forma intuitiva e eficiente.

## Tecnologias Utilizadas

- **SAP Fiori**: Framework para criar aplicações web responsivas.
- **SAPUI5**: Biblioteca de desenvolvimento para construir a interface do usuário.
- **OData Services**: Para comunicação com a camada de back-end e recuperação de dados.
- **SAP Business Application Studio**: Ambiente de desenvolvimento.

## Funcionalidades da Aplicação

1. **Visualização de Produtos**: A aplicação exibirá uma lista de produtos com informações relevantes, como nome, descrição, preço e quantidade em estoque.
  
<!-- 2. **Filtros**: Os usuários poderão aplicar filtros para refinar a busca por produtos com base em critérios como categoria, preço e disponibilidade. -->
  
<!-- 3. **Exportação de Relatórios**: A aplicação permitirá exportar relatórios em formatos como Excel ou PDF para análise externa. -->

<!-- ## Passos para Criação da Aplicação

### 1. Configuração do Ambiente

- Acesse o **SAP Business Application Studio**.
- Crie um novo projeto de aplicativo Fiori usando o template "SAP Fiori Application".

### 2. Modelagem de Dados

- **Defina o OData Service**: Utilize o SAP Gateway para modelar o serviço OData que fornecerá os dados dos produtos.
- **Entidade do Produto**: Crie uma entidade chamada `Product` com os seguintes atributos:
  - `ProductID`
  - `ProductName`
  - `Description`
  - `Price`
  - `StockQuantity`

### 3. Desenvolvimento da Interface

- **Criar a View**: Utilize XML para criar a interface da aplicação.
- **Adicionar Componentes UI**:
  - **Tabela**: Exiba os produtos em uma tabela.
  - **Filtros**: Adicione campos de entrada para filtros e um botão para aplicar os filtros.
  - **Botão de Exportação**: Crie um botão que permita aos usuários exportar os dados da tabela.

### 4. Lógica de Controle

- **Controlador**: Implemente a lógica necessária no controlador para:
  - Recuperar dados do OData Service.
  - Aplicar filtros com base nas entradas do usuário.
  - Gerar relatórios em formatos desejados.

### 5. Testes

- **Testar Funcionalidades**: Execute testes manuais para garantir que todas as funcionalidades da aplicação estejam funcionando corretamente.
- **Validação de Dados**: Verifique se os dados exibidos na tabela correspondem aos dados retornados pelo OData Service.

### 6. Implantação

- **Publicar a Aplicação**: Após a conclusão do desenvolvimento e dos testes, publique a aplicação no sistema SAP Fiori Launchpad.

## Conclusão

A aplicação Fiori para geração de relatórios de produtos proporcionará uma maneira eficiente e amigável para os usuários acessarem e analisarem dados de produtos. Através do uso de OData Services e SAPUI5, a aplicação assegura uma experiência de usuário fluida e responsiva. -->




## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Sun Oct 27 2024 04:19:09 GMT+0000 (Coordinated Universal Time)|
|**App Generator**<br>@sap/generator-fiori-freestyle|
|**App Generator Version**<br>1.15.3|
|**Generation Platform**<br>SAP Business Application Studio|
|**Template Used**<br>simple|
|**Service Type**<br>OData Url|
|**Service URL**<br>https://services.odata.org/V2/Northwind/Northwind.svc/|
|**Module Name**<br>produtos|
|**Application Title**<br>relatório de produtos|
|**Namespace**<br>br.com.produtos|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.129.2|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## produtos

Relatório de produtos em estoque

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm start
```

- It is also possible to run the application using mock data that reflects the OData Service URL supplied during application generation.  In order to run the application with Mock Data, run the following from the generated app root folder:

```
    npm run start-mock
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)


