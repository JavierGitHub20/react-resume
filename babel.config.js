module.exports = {
    presets: [
      '@babel/preset-env', // Transpila el código a una versión compatible con los navegadores
      '@babel/preset-react', // Transpila JSX
      '@babel/preset-typescript', // Si estás usando TypeScript
    ],
    plugins: [
      [
        '@babel/plugin-proposal-decorators',
        {
          version: 'legacy', // Usa la sintaxis de decoradores antigua
          decoratorsBeforeExport: true, // Asegura que los decoradores se apliquen antes de la exportación
        },
      ],
      '@babel/plugin-syntax-jsx', // Si estás usando JSX
    ],
  };
  