export const json = `{
  "block": "warning",
  "content": [
      { "block": "text", "mods": { "size": "l" } },
      { "block": "text", "mods": { "size": "l" } }
  ],
  "mods": {
    "checked": true
  }
}`;

export const result = [
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
            start: { line: 4, column: 9, offset: 47 },
            end: { line: 4, column: 16, offset: 54 },
            source: null,
          },
        },
        value: {
          type: 'Literal',
          value: 'text',
          raw: '"text"',
          loc: {
            start: { line: 4, column: 18, offset: 56 },
            end: { line: 4, column: 24, offset: 62 },
            source: null,
          },
        },
        loc: {
          start: { line: 4, column: 9, offset: 47 },
          end: { line: 4, column: 24, offset: 62 },
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
            start: { line: 4, column: 26, offset: 64 },
            end: { line: 4, column: 32, offset: 70 },
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
                value: 'size',
                raw: '"size"',
                loc: {
                  start: { line: 4, column: 36, offset: 74 },
                  end: { line: 4, column: 42, offset: 80 },
                  source: null,
                },
              },
              value: {
                type: 'Literal',
                value: 'l',
                raw: '"l"',
                loc: {
                  start: { line: 4, column: 44, offset: 82 },
                  end: { line: 4, column: 47, offset: 85 },
                  source: null,
                },
              },
              loc: {
                start: { line: 4, column: 36, offset: 74 },
                end: { line: 4, column: 47, offset: 85 },
                source: null,
              },
            },
          ],
          loc: {
            start: { line: 4, column: 34, offset: 72 },
            end: { line: 4, column: 49, offset: 87 },
            source: null,
          },
        },
        loc: {
          start: { line: 4, column: 26, offset: 64 },
          end: { line: 4, column: 49, offset: 87 },
          source: null,
        },
      },
    ],
    loc: {
      start: { line: 4, column: 7, offset: 45 },
      end: { line: 4, column: 51, offset: 89 },
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
            start: { line: 5, column: 9, offset: 99 },
            end: { line: 5, column: 16, offset: 106 },
            source: null,
          },
        },
        value: {
          type: 'Literal',
          value: 'text',
          raw: '"text"',
          loc: {
            start: { line: 5, column: 18, offset: 108 },
            end: { line: 5, column: 24, offset: 114 },
            source: null,
          },
        },
        loc: {
          start: { line: 5, column: 9, offset: 99 },
          end: { line: 5, column: 24, offset: 114 },
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
            start: { line: 5, column: 26, offset: 116 },
            end: { line: 5, column: 32, offset: 122 },
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
                value: 'size',
                raw: '"size"',
                loc: {
                  start: { line: 5, column: 36, offset: 126 },
                  end: { line: 5, column: 42, offset: 132 },
                  source: null,
                },
              },
              value: {
                type: 'Literal',
                value: 'l',
                raw: '"l"',
                loc: {
                  start: { line: 5, column: 44, offset: 134 },
                  end: { line: 5, column: 47, offset: 137 },
                  source: null,
                },
              },
              loc: {
                start: { line: 5, column: 36, offset: 126 },
                end: { line: 5, column: 47, offset: 137 },
                source: null,
              },
            },
          ],
          loc: {
            start: { line: 5, column: 34, offset: 124 },
            end: { line: 5, column: 49, offset: 139 },
            source: null,
          },
        },
        loc: {
          start: { line: 5, column: 26, offset: 116 },
          end: { line: 5, column: 49, offset: 139 },
          source: null,
        },
      },
    ],
    loc: {
      start: { line: 5, column: 7, offset: 97 },
      end: { line: 5, column: 51, offset: 141 },
      source: null,
    },
  },
];
