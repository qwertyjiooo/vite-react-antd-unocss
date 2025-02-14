import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { dirname } from 'node:path';
import UnoCSS from 'unocss/vite';

// eslint-disable-next-line no-undef
const CWD = process.cwd();
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, CWD);
  return {
    plugins: [UnoCSS(), react()],
    // @别名 
    resolve: {
      alias: {
        '@': dirname(new URL(import.meta.url).pathname) + '/src'
      }
    },
    // 配置代理 
    server: {
      host: '0.0.0.0',
      port: 3000,
      open: true,
      proxy: {
        '/api': {
          target: env.VITE_APP_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    // build 构建配置 
    build: {
      target: 'modules', // 打包成 es2015 模块 
      outDir: 'dist', // 输出目录 
      assetsDir: 'assets', // 静态资源目录 
      rollupOptions: { // 构建配置 
        minify: 'terser', // 压缩代码,混淆器，terser构建后文件体积更小 
        output: {
          // 资源文件名格式 
          chunkFileNames: 'assets/js/[name]-[hash].js', // 代码分割文件名 
          entryFileNames: 'assets/js/[name]-[hash].js', // 入口文件名 
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]', // 资源文件名 
          manualChunks(id) { // 按需加载 
            if (id.includes('node_modules')) { // 第三方库,按需加载 
              return id.toString().split('node_modules/')[1].split('/')[0].toString();  // 按模块分割 
            }
          }
        }
      }
    }
  }
}); 