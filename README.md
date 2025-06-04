## 🚀 Como Executar o Projeto

### 1. Instale as dependências

Navegue até a raiz do projeto e rode:

```bash
npm install
```

### 2. Inicie os microserviços (em terminais separados)
```bash
node services/auth/index.js      # Porta 4001
node services/user/index.js      # Porta 4002
node services/product/index.js   # Porta 4003
```

### 3. Inicie o API Gateway
```bash
node index.js                    # Porta 3000
```

## 🧪 Como Testar

Você pode testar via navegador ou terminal com `curl`:

```bash
curl http://localhost:3000/auth/login
curl http://localhost:3000/users/list
curl http://localhost:3000/products/all
```

Se o microserviço estiver fora do ar ou com falha, o Circuit Breaker entra em ação e retorna uma resposta de fallback.

## 🔄 Como funciona o Circuit Breaker?

Os arquivos `authService.js`, `userService.js` e `productService.js` funcionam como clientes intermediários com proteção:

- Encaminham a requisição para os microserviços reais via `axios`.

- Usam `opossum` para evitar chamadas a serviços que estejam instáveis.

- Retornam `fallback` em caso de falhas consecutivas ou tempo excedido.