import { defineConfig } from 'vite';
import path from "path";
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3443,
    https: true,
    host: '0.0.0.0',
  },
  plugins: [basicSsl()],
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: path.join(__dirname, "./dist"),
  }
});