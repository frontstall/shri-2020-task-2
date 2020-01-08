export const correct = `{
  "block": "warning",
  "content": [
      { "block": "text", "mods": { "size": "l" } },
      { "block": "text", "mods": { "size": "l" } }
  ]
}`;

export const wrong = `{
  "block": "warning",
  "content": [
      { "block": "text", "mods": { "size": "l" } },
      { "block": "text", "mods": { "size": "m" } }
  ]
}`;

export const error = {
  code: 'WARNING.TEXT_SIZES_SHOULD_BE_EQUAL',
  error: 'Тексты в блоке warning должны быть одного размера',
  location: {
    start: { column: 1, line: 1 },
    end: { column: 2, line: 7 },
  },
};
