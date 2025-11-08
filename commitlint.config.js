// commitlint.config.js
export default {
    extends: ['@commitlint/config-conventional'],
    // Opcional: personaliza tipos y scopes
    rules: {
        // Ejemplos de personalización:
        // 'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert']],
        // 'scope-enum': [2, 'always', ['ui', 'ux', 'deps', 'config', 'ci', 'astro', 'strapi', 'react', 'vue']],
        // 'subject-case': [0], // permite usar emojis/texto libre en el subject
    },
};
