export const correct = `{
  "block": "warning",
  "content": [
      { "block": "placeholder", "mods": { "size": "m" } }
  ]
}`;

export const wrong = `{
  "block": "warning",
  "content": [
      { "block": "placeholder", "mods": { "size": "xl" } }
  ]
}`;

export const error = {
  code: 'WARNING.INVALID_PLACEHOLDER_SIZE',
  error: 'Размер блока placeholder может быть только s, m или l',
  location: {
    start: {
      column: 7,
      line: 4,
    },
    end: {
      column: 59,
      line: 4,
    },
  },
};
