//import { sveltekit } from '@sveltejs/kit/vite';
//import {  defineConfig, searchForWorkspaceRoot } from 'vite';

//export default defineConfig({
//	plugins: [sveltekit()],
//	vite: {
//        server: {
//            fs: {
//				allow: [searchForWorkspaceRoot(process.cwd()), 'static', ".."]
//            }
//        }
//    }
//});


//import { sveltekit } from '@sveltejs/kit/vite';
//import { defineConfig } from 'vite';

//export default defineConfig({
//  plugins: [sveltekit()],
//  build: {
//    rollupOptions: {
//      input: {
 //       main: 'src/main.js',
        // Ajoutez des points d'entrée supplémentaires si nécessaire
//      },
//      output: {
//        assetFileNames: 'assets/[name].[hash][extname]'
//      }
//    }
//  }

//publicDir: 'static'
//});









//import { viteStaticCopy } from 'vite-plugin-static-copy';

//export default {
//  base: '/build/client/', 
 // plugins: [ sveltekit(),
//    viteStaticCopy({
//      targets: [
//        {
//          src: 'src/static/img/*',
//          dest: 'assets/'
//        }
//      ]
//    })
//  ],


//build: {

//rollupOptions: {
//   input: {
//        main: './src/static/scripts/index.js'
  
//        }

//        },

//    assetsDir: 'assets',
//    sourcemap: true,
//    minify: 'esbuild',
   
//}



//};









import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  build: {
    rollupOptions: {
      // Définir la configuration de sortie
      output: {
        // Définit le format de nommage pour les assets (fichiers images, etc.)
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    }
  },
  // Ajouter les options pour que le dossier static soit pris en compte
  publicDir: 'static'
});

