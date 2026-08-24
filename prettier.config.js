/**
 * @type {import("prettier").Config}
 */
export default {
  arrowParens: 'always',
  bracketSameLine: true,
  bracketSpacing: true,
  endOfLine: 'lf',
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  printWidth: 140,
  // Tailwind v4 has no tailwind.config.js; the class sorter needs the CSS entry
  // point to resolve @theme tokens (bg-primary, bg-background/80, ...).
  tailwindStylesheet: './template/src/styles.css',
  proseWrap: 'never',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
};
