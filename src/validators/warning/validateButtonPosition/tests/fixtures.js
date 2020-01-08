export const correct = `{
  "block": "warning",
  "content": [
      { "block": "placeholder", "mods": { "size": "m" } },
      { "block": "button", "mods": { "size": "m" } }
  ]
}`;

export const wrong = `{
  "block": "warning",
  "content": [
      { "block": "button", "mods": { "size": "m" } },
      { "block": "placeholder", "mods": { "size": "m" } }
  ]
}`;

export const error = {
  code: 'WARNING.INVALID_BUTTON_POSITION',
  error: 'Кнопка должна размещаться после блока placeholder',
  location: {
    end: {
      column: 53,
      line: 4,
    },
    start: {
      column: 7,
      line: 4,
    },
  },
};
