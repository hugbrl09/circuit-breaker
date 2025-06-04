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