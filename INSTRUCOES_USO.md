# Instruções de Uso do Custom Element MyButton

## Como usar em outro projeto

### 1. Incluir os arquivos

```html
<!DOCTYPE html>
<html>
<head>
    <!-- CSS do custom element -->
    <link rel="stylesheet" href="https://eduardo9976.github.io/shared-component-nuxt/dist/my-button.css">
</head>
<body>
    <!-- Seu conteúdo aqui -->
    
    <!-- JavaScript do custom element -->
    <script src="https://eduardo9976.github.io/shared-component-nuxt/dist/my-button.js" type="module"></script>
</body>
</html>
```

### 2. Usar o custom element

```html
<!-- Botão básico -->
<my-button label="Clique aqui"></my-button>

<!-- Botão com evento personalizado -->
<my-button label="Salvar" onclick="salvarDados()"></my-button>

<!-- Botão com evento inline -->
<my-button label="Alerta" onclick="alert('Funcionou!')"></my-button>
```

### 3. Eventos disponíveis

- `click`: Disparado quando o botão é clicado
- `onclick`: Atributo para definir função JavaScript inline

### 4. Propriedades disponíveis

- `label`: Texto do botão (padrão: "Clique aqui")

## Características

✅ **Estilos incluídos**: O custom element já inclui todos os estilos necessários
✅ **Funciona em qualquer projeto**: Não depende de frameworks específicos
✅ **Responsivo**: Funciona em diferentes tamanhos de tela
✅ **Acessível**: Inclui suporte a foco e navegação por teclado
✅ **Sem CSS manual**: Usa apenas Tailwind CSS processado automaticamente

## Exemplo completo

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Projeto</title>
    <link rel="stylesheet" href="https://eduardo9976.github.io/shared-component-nuxt/dist/my-button.css">
</head>
<body>
    <h1>Meu Projeto</h1>
    
    <div>
        <my-button label="Botão Principal" onclick="handleClick()"></my-button>
    </div>

    <script>
        function handleClick() {
            alert('Botão clicado!');
        }
    </script>
    
    <script src="https://eduardo9976.github.io/shared-component-nuxt/dist/my-button.js" type="module"></script>
</body>
</html>
```

## Nota sobre Nuxt UI

O custom element usa classes do Tailwind CSS que simulam o estilo do Nuxt UI, mas não depende diretamente do framework Nuxt UI. Isso garante compatibilidade total com qualquer projeto web. 