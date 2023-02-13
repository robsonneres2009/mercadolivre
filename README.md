## Descrição funcional da aplicação
Na visão da barra de pesquisa, deve-se poder acessar o produto procurado e, ao enviar o formulário, navegar até a visão de pesquisa, visualizando somente 4 produtos. Depois, ao clicar sobre um deles, deve-se navegar até a visão de detalhe do produto.
Dado o ID de um produto, deve-se poder acessar diretamente a visão do detalhe do produto.

## Stack e arquitetura
1. JavaScript
2. NextJS (https://nextjs.org/)
3. NodeJS (API Route)
4 .CSS Module 
5. Atomic Design (https://atomicdesign.bradfrost.com/chapter-2/)
6. Testing Library

## Para executar o projeto via Docker
Install Docker on your machine.
Build your container:
```bash 
docker build -t mercadolivre-docker ./
```
Run your container: 
```bash
docker run -p 3000:3000 mercadolivre-docker
```


## Para executar o projeto localmente
Para iniciar execute o comando para instalar as dependencias:
```bash
npm install
# or
yarn
```

Agora basta executar o servidor:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.