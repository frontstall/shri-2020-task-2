export const correct = `{
  "block": "warning",
  "content": [
      { "block": "text", "mods": { "size": "l" } },
      { "block": "button", "mods": { "size": "xl" } }
  ]
}`;

export const wrong = `{
  "block": "warning",
  "content": [
      { "block": "text", "mods": { "size": "l" } },
      { "block": "button", "mods": { "size": "s" } }
  ]
}`;

export const errors = [
  {
    code: 'WARNING.INVALID_BUTTON_SIZE',
    error:
      'Размер кнопки блока warning должен быть на 1 шаг больше размера текста',
    location: {
      start: { column: 7, line: 5 },
      end: { column: 53, line: 5 },
    },
  },
];
