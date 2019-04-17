module.exports = {
  root: true,
  // parser: 'babel-eslint',
  parserOptions: {
    // "ecmaVersion": 6, //指定ECMAScript支持的版本，6为ES6
    // "ecmaFeatures": {
    //   "jsx": true//启动JSX
    // },
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ['standard'], // "extends": "eslint:recommended",
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // ---------------------------- 强制 -----------------------------------
    'strict': 'error',
    // 大括号不允许省略
    'curly': 'error', //error = 2
    // 要求构造函数首字母大写
    'new-cap': ['error', {
      'newIsCap': false,
      'properties': false
    }],
    // 发布环境禁止debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 禁用 with 语句
    'no-with': 'error',
    // 需要把立即执行的函数包裹起来，比如 (function () { return { y: 1 };})();
    'wrap-iife': ['error', 'inside'],

    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': 'error',
    // 禁止自身比较
    'no-self-compare': 'error',
    // 禁用不必要的分号
    'no-extra-semi': 'error',

    // 禁止定义前使用变量
    'no-use-before-define': ['error', {
      variables: false,
      functions: false,
      classes: false
    }],
    // 禁止使用 Object 构造函数
    'no-new-object': 'error',
    // 禁止在 else 前有 return
    'no-else-return': 'error',

    // 禁用未声明的变量
    'no-undef': ['error', {'typeof': true}],
    //禁用未使用的变量
    'no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'none',
      'ignoreRestSiblings': false
      // "varsIgnorePattern": "[initCB_|itemClickCB_|sst]"
    }],
    'operator-linebreak': ['error', 'before'],
    // 末尾需要分号
    'semi': ['error', 'always'],
    // 强制使用单引号
    'quotes': ['error', 'single', {'allowTemplateLiterals': true, 'avoidEscape': true}],

    // ---------------------------- 警告 -----------------------------------
    //驼峰命名
    'camelcase': ['warn', {properties: 'never'}],
    // 禁用不必要的转义
    'no-useless-escape': ['warn'],
    // 警告使用标签语句
    'no-labels': 'warn',
    // 禁止重新声明变量
    'no-redeclare': ['warn'],
    //禁止使用eval表达式
    'no-eval': ['warn'],
    'no-void': 1, //使用void运算符
    'array-bracket-even-spacing': 1, //数组换行
    //扩展原生对象
    'no-extend-native': 1,
    'no-useless-return': 1,
    'no-control-regex': 1,

    // ---------------------------- 关闭 -----------------------------------
    //箭头函数，不作要求
    'arrow-parens': 0,
    'object-curly-spacing': 0,
    'object-curly-even-spacing': 0,
    // 不要求使用 === 和 !==
    'eqeqeq': 'off', //off = 0
    'generator-star-spacing': 0,
    'indent': ['off'],
    'space-before-blocks': ['off'],
    'spaced-comment': 'off',
    //允许tab换行
    'no-tabs': 'off',
    'no-extra-parens': ['off'],
    // 禁用不必要的 .call() 和 .apply()
    'no-useless-call': 'off',
    'no-sequences': 0, //允许逗号运算符
    'radix': 0, //parseInt不需要强制输入10
    'standard/no-callback-literal': [0, ['cb', 'callback']],
    //变量只在一处定义
    'one-var': ['off']
  },
  'env': {
    'browser': true,
    'node': true,
    'jquery': true
  },
  'globals': {
    'window': true
  }
};
