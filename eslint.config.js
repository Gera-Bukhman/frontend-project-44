export default [{
  rules: {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single']
  },
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      encoding: 'utf-8'  // ← Это ключевое добавление
    }
  }
}];