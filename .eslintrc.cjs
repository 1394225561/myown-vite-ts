module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  settings: {
    // 导入的扩展名 设置后可以省略
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      // alias: {
      //   map: [['@', './src']],
      // },
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'object-curly-newline': 0,
    'max-len': ['error', {
      code: 250,
    }],
    'implicit-arrow-linebreak': 0,
    'comma-dangle': 1,
    'no-else-return': [0, {
      allowElseIf: true,
    }],
    'no-param-reassign': [
      2,
      {
        props: true,
        ignorePropertyModificationsFor: [
          'res', // for Express responses
          'item', // for Express responses
          'state', // for vuex state 解决assignment to property of function parameter ‘state‘
        ],
      },
    ],
    // 因为vite需要自己构建配置而vue-cli自动构建"@"，所以eslint不识别webpack的路径别名 所以加入以下关闭规则的配置
    'import/no-unresolved': 'off',
    // 'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',
    // vue组件名必须使用多单词，关闭该规则
    'vue/multi-word-component-names': 0,
    // vue3可以有多个根组件，所以关闭该规则
    'vue/no-multiple-template-root': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
