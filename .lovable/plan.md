## Diagnóstico

A tela branca em `versoscanal.github.io/geradorderoteirosyoutube/` acontece porque o workflow de deploy (`.github/workflows/deploy.yml`) está usando as credenciais do projeto Supabase **original** (`wkvsohitzooukthyoxnk`), que não pertence mais a este remix. Quando o app inicia em produção, ele tenta autenticar contra um backend que não existe/não tem acesso, o componente de auth quebra e nada é renderizado.

O `.env` local já está correto com o novo backend (`cerwpcwjouuxfphyjwmd`) — por isso o preview do Lovable funciona, mas o GitHub Pages não.

## Correção

Atualizar `.github/workflows/deploy.yml` para usar as credenciais do backend atual deste remix:

- `VITE_SUPABASE_URL` → `https://cerwpcwjouuxfphyjwmd.supabase.co`
- `VITE_SUPABASE_PUBLISHABLE_KEY` → chave anon do remix atual
- `VITE_SUPABASE_PROJECT_ID` → `cerwpcwjouuxfphyjwmd`

## Próximos passos depois da correção

1. Fazer commit/push para `main` no GitHub.
2. Aguardar o workflow "Deploy to GitHub Pages" finalizar (~1–2 min).
3. Limpar cache do navegador (Ctrl+Shift+R) e recarregar a página.

## Observação importante

Como este é um remix com backend novo, as contas de usuário que existiam no projeto original **não existem aqui**. Você precisará criar uma conta nova na tela de login depois do deploy.
