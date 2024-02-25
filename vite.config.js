import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Meu-portifolio-V.01/', // Substitua 'nome-do-seu-repositorio' pelo nome do seu repositório no GitHub
})
