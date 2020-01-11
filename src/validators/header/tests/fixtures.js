export const correct = `[
  {
      "block": "text",
      "mods": { "type": "h1" }
  }
]`;

export const wrong = `[
  {
      "block": "text",
      "mods": { "type": "h1" }
  },
  {
      "block": "text",
      "mods": { "type": "h1" }
  }
]`;

export const error = [
  {
    code: 'TEXT.SEVERAL_H1',
    error: 'Не более одного заголовка h1 на странице',
    location: { start: { line: 6, column: 3 }, end: { line: 9, column: 4 } },
  },
];

export const correct1 = `[
  {
      "block": "text",
      "mods": { "type": "h1" }
  },
  {
      "block": "text",
      "mods": { "type": "h2" }
  }
]`;

export const wrong1 = `[
  {
      "block": "text",
      "mods": { "type": "h2" }
  },
  {
      "block": "text",
      "mods": { "type": "h1" }
  }
]`;

export const error1 = [
  {
    code: 'TEXT.INVALID_H2_POSITION',
    error: 'Заголовок уровня h2 не может находиться перед заголовком h1',
    location: { start: { line: 2, column: 3 }, end: { line: 5, column: 4 } },
  },
];

export const correct2 = `[
  {
      "block": "text",
      "mods": { "type": "h2" }
  },
  {
      "block": "text",
      "mods": { "type": "h3" }
  }
]`;

export const wrong2 = `[
  {
      "block": "text",
      "mods": { "type": "h3" }
  },
  {
      "block": "text",
      "mods": { "type": "h2" }
  }
]`;

export const error2 = [
  {
    code: 'TEXT.INVALID_H3_POSITION',
    error: 'Заголовок уровня h3 не может находиться перед заголовком h2',
    location: { start: { line: 2, column: 3 }, end: { line: 5, column: 4 } },
  },
];
