module.exports = {
    root: true,
    extends: "plugin:vue/base",
    parserOptions: {
        "parser": "babel-eslint",
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": { // 添加ES特性支持，使之能够识别ES6语法
          "jsx": true
        }
    },
    plugins: [
        'vue'
    ],
    extends: [
        'plugin:vue/essential'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "vue/v-bind-style": ["error", "shorthand"],
        "vue/v-on-style": ["error", "shorthand"],
        "vue/require-v-for-key": "error",
    }
}