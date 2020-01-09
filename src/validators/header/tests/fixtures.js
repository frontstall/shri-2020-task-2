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

export const ast = {
  type: 'Array',
  children: [
    {
      type: 'Object',
      children: [
        {
          type: 'Property',
          key: {
            type: 'Identifier',
            value: 'block',
            raw: '"block"',
            loc: {
              start: { line: 3, column: 7, offset: 12 },
              end: { line: 3, column: 14, offset: 19 },
              source: null,
            },
          },
          value: {
            type: 'Literal',
            value: 'text',
            raw: '"text"',
            loc: {
              start: { line: 3, column: 16, offset: 21 },
              end: { line: 3, column: 22, offset: 27 },
              source: null,
            },
          },
          loc: {
            start: { line: 3, column: 7, offset: 12 },
            end: { line: 3, column: 22, offset: 27 },
            source: null,
          },
        },
        {
          type: 'Property',
          key: {
            type: 'Identifier',
            value: 'mods',
            raw: '"mods"',
            loc: {
              start: { line: 4, column: 7, offset: 35 },
              end: { line: 4, column: 13, offset: 41 },
              source: null,
            },
          },
          value: {
            type: 'Object',
            children: [
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  value: 'type',
                  raw: '"type"',
                  loc: {
                    start: { line: 4, column: 17, offset: 45 },
                    end: { line: 4, column: 23, offset: 51 },
                    source: null,
                  },
                },
                value: {
                  type: 'Literal',
                  value: 'h1',
                  raw: '"h1"',
                  loc: {
                    start: { line: 4, column: 25, offset: 53 },
                    end: { line: 4, column: 29, offset: 57 },
                    source: null,
                  },
                },
                loc: {
                  start: { line: 4, column: 17, offset: 45 },
                  end: { line: 4, column: 29, offset: 57 },
                  source: null,
                },
              },
            ],
            loc: {
              start: { line: 4, column: 15, offset: 43 },
              end: { line: 4, column: 31, offset: 59 },
              source: null,
            },
          },
          loc: {
            start: { line: 4, column: 7, offset: 35 },
            end: { line: 4, column: 31, offset: 59 },
            source: null,
          },
        },
      ],
      loc: {
        start: { line: 2, column: 3, offset: 4 },
        end: { line: 5, column: 4, offset: 63 },
        source: null,
      },
    },
    {
      type: 'Object',
      children: [
        {
          type: 'Property',
          key: {
            type: 'Identifier',
            value: 'block',
            raw: '"block"',
            loc: {
              start: { line: 7, column: 7, offset: 75 },
              end: { line: 7, column: 14, offset: 82 },
              source: null,
            },
          },
          value: {
            type: 'Literal',
            value: 'text',
            raw: '"text"',
            loc: {
              start: { line: 7, column: 16, offset: 84 },
              end: { line: 7, column: 22, offset: 90 },
              source: null,
            },
          },
          loc: {
            start: { line: 7, column: 7, offset: 75 },
            end: { line: 7, column: 22, offset: 90 },
            source: null,
          },
        },
        {
          type: 'Property',
          key: {
            type: 'Identifier',
            value: 'mods',
            raw: '"mods"',
            loc: {
              start: { line: 8, column: 7, offset: 98 },
              end: { line: 8, column: 13, offset: 104 },
              source: null,
            },
          },
          value: {
            type: 'Object',
            children: [
              {
                type: 'Property',
                key: {
                  type: 'Identifier',
                  value: 'type',
                  raw: '"type"',
                  loc: {
                    start: { line: 8, column: 17, offset: 108 },
                    end: { line: 8, column: 23, offset: 114 },
                    source: null,
                  },
                },
                value: {
                  type: 'Literal',
                  value: 'h1',
                  raw: '"h1"',
                  loc: {
                    start: { line: 8, column: 25, offset: 116 },
                    end: { line: 8, column: 29, offset: 120 },
                    source: null,
                  },
                },
                loc: {
                  start: { line: 8, column: 17, offset: 108 },
                  end: { line: 8, column: 29, offset: 120 },
                  source: null,
                },
              },
            ],
            loc: {
              start: { line: 8, column: 15, offset: 106 },
              end: { line: 8, column: 31, offset: 122 },
              source: null,
            },
          },
          loc: {
            start: { line: 8, column: 7, offset: 98 },
            end: { line: 8, column: 31, offset: 122 },
            source: null,
          },
        },
      ],
      loc: {
        start: { line: 6, column: 3, offset: 67 },
        end: { line: 9, column: 4, offset: 126 },
        source: null,
      },
    },
  ],
  loc: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 10, column: 2, offset: 128 },
    source: null,
  },
};

export const error = [
  {
    code: 'TEXT.SEVERAL_H1',
    error: 'Не более одного заголовка h1 на странице',
    location: { start: { line: 6, column: 3 }, end: { line: 9, column: 4 } },
  },
];
