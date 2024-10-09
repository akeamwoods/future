import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === 'production' ? '/future/' : '/',
    resolve: {
      alias: {
        '@api': '/src/api',
        '@components': '/src/components',
        '@hooks': '/src/hooks',
        '@test': '/src/test',
        '@types': '/src/types',
        '@utils': '/src/utils',
        '@views': '/src/views',
      },
    },
  };
});
