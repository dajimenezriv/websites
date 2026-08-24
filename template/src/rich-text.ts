// Inline markup used across block content: *bold*, _italic_, ~accent~, [label](url).
// Renders to an HTML string (consumed via `set:html`) rather than nested components,
// because the grammar is recursive and Astro has no fragment-returning equivalent
// of the original React parser.

// Indexed by an arbitrary character, so the lookup may miss.
const MARKS: Record<string, ((inner: string) => string) | undefined> = {
  '*': (inner) => `<strong class="font-bold">${inner}</strong>`,
  _: (inner) => `<em class="italic">${inner}</em>`,
  '~': (inner) => `<span class="text-primary">${inner}</span>`,
};

const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

// React escaped text nodes for us; building an HTML string means doing it by hand.
function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => ESCAPES[char]);
}

function parseInline(text: string): string {
  let html = '';
  let buffer = '';
  let i = 0;

  const flush = () => {
    if (buffer) {
      html += escapeHtml(buffer);
      buffer = '';
    }
  };

  while (i < text.length) {
    const char = text.charAt(i);

    if (char === '\n') {
      flush();
      html += '<br />';
      i++;
      continue;
    }

    // Links: [label](url). Used for internal linking, which matters for SEO.
    if (char === '[') {
      const closeBracket = text.indexOf(']', i + 1);
      if (closeBracket !== -1 && text.charAt(closeBracket + 1) === '(') {
        const closeParen = text.indexOf(')', closeBracket + 2);
        if (closeParen !== -1) {
          flush();
          const label = text.slice(i + 1, closeBracket);
          const url = text.slice(closeBracket + 2, closeParen);
          html += `<a href="${escapeHtml(url)}" class="text-primary underline">${parseInline(label)}</a>`;
          i = closeParen + 1;
          continue;
        }
      }
    }

    const mark = MARKS[char];
    const close = mark ? text.indexOf(char, i + 1) : -1;

    if (mark && close !== -1) {
      flush();
      html += mark(parseInline(text.slice(i + 1, close)));
      i = close + 1;
    } else {
      buffer += char;
      i++;
    }
  }

  flush();
  return html;
}

export function richText(text: string) {
  return parseInline(text);
}

// Block-level variant for long-form service page bodies: ## / ### headings,
// `- ` lists, blank-line-separated paragraphs.
export function richTextBody(text: string) {
  return text
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      if (block.startsWith('### ')) return `<h3 class="mt-8 text-xl">${parseInline(block.slice(4))}</h3>`;
      if (block.startsWith('## ')) return `<h2 class="mt-10 text-3xl">${parseInline(block.slice(3))}</h2>`;

      const lines = block.split('\n');
      if (lines.every((line) => line.startsWith('- '))) {
        const items = lines.map((line) => `<li>${parseInline(line.slice(2))}</li>`).join('');
        return `<ul class="mt-4 list-disc space-y-2 pl-6 leading-relaxed">${items}</ul>`;
      }

      return `<p class="mt-4 leading-relaxed">${parseInline(block)}</p>`;
    })
    .join('');
}
