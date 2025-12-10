import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const PORT = Number(env.VITE_PORT) || 5173;
  const isDev = mode === 'development';

  return {
    mode: isDev ? 'development' : 'production',
    plugins: [
      react(),
      visualizer({
        open: !isDev,
        gzipSize: true,
        brotliSize: true,
      }),
    ],
    build: {
      manifest: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@app': path.resolve(__dirname, './src/app'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@widgets': path.resolve(__dirname, './src/widgets'),
        '@features': path.resolve(__dirname, './src/features'),
        '@entities': path.resolve(__dirname, './src/entities'),
        '@shared': path.resolve(__dirname, './src/shared'),
      },
    },
    esbuild: isDev
      ? {}
      : {
          drop: ['console', 'debugger'],
        },
    server: {
      port: PORT,
    },
  };
});
