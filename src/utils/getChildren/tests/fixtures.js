export const json = `{
  "block": "header",
  "elem": "content",
  "content": [
      {
          "block": "header",
          "elem": "logo"
      },
      [
          {
              "block": "onoffswitch",
              "mods": {
                  "checked": true
              },
              "content": [
                  {
                      "block": "onoffswitch",
                      "elem": "button"
                  }
              ]
          }
      ]
  ]
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
            start: { line: 6, column: 11, offset: 77 },
            end: { line: 6, column: 18, offset: 84 },
            source: null,
          },
        },
        value: {
          type: 'Literal',
          value: 'header',
          raw: '"header"',
          loc: {
            start: { line: 6, column: 20, offset: 86 },
            end: { line: 6, column: 28, offset: 94 },
            source: null,
          },
        },
        loc: {
          start: { line: 6, column: 11, offset: 77 },
          end: { line: 6, column: 28, offset: 94 },
          source: null,
        },
      },
      {
        type: 'Property',
        key: {
          type: 'Identifier',
          value: 'elem',
          raw: '"elem"',
          loc: {
            start: { line: 7, column: 11, offset: 106 },
            end: { line: 7, column: 17, offset: 112 },
            source: null,
          },
        },
        value: {
          type: 'Literal',
          value: 'logo',
          raw: '"logo"',
          loc: {
            start: { line: 7, column: 19, offset: 114 },
            end: { line: 7, column: 25, offset: 120 },
            source: null,
          },
        },
        loc: {
          start: { line: 7, column: 11, offset: 106 },
          end: { line: 7, column: 25, offset: 120 },
          source: null,
        },
      },
    ],
    loc: {
      start: { line: 5, column: 7, offset: 65 },
      end: { line: 8, column: 8, offset: 128 },
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
            start: { line: 11, column: 15, offset: 164 },
            end: { line: 11, column: 22, offset: 171 },
            source: null,
          },
        },
        value: {
          type: 'Literal',
          value: 'onoffswitch',
          raw: '"onoffswitch"',
          loc: {
            start: { line: 11, column: 24, offset: 173 },
            end: { line: 11, column: 37, offset: 186 },
            source: null,
          },
        },
        loc: {
          start: { line: 11, column: 15, offset: 164 },
          end: { line: 11, column: 37, offset: 186 },
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
            start: { line: 12, column: 15, offset: 202 },
            end: { line: 12, column: 21, offset: 208 },
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
                value: 'checked',
                raw: '"checked"',
                loc: {
                  start: { line: 13, column: 19, offset: 230 },
                  end: { line: 13, column: 28, offset: 239 },
                  source: null,
                },
              },
              value: {
                type: 'Literal',
                value: true,
                raw: 'true',
                loc: {
                  start: { line: 13, column: 30, offset: 241 },
                  end: { line: 13, column: 34, offset: 245 },
                  source: null,
                },
              },
              loc: {
                start: { line: 13, column: 19, offset: 230 },
                end: { line: 13, column: 34, offset: 245 },
                source: null,
              },
            },
          ],
          loc: {
            start: { line: 12, column: 23, offset: 210 },
            end: { line: 14, column: 16, offset: 261 },
            source: null,
          },
        },
        loc: {
          start: { line: 12, column: 15, offset: 202 },
          end: { line: 14, column: 16, offset: 261 },
          source: null,
        },
      },
      {
        type: 'Property',
        key: {
          type: 'Identifier',
          value: 'content',
          raw: '"content"',
          loc: {
            start: { line: 15, column: 15, offset: 277 },
            end: { line: 15, column: 24, offset: 286 },
            source: null,
          },
        },
        value: {
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
                      start: { line: 17, column: 23, offset: 332 },
                      end: { line: 17, column: 30, offset: 339 },
                      source: null,
                    },
                  },
                  value: {
                    type: 'Literal',
                    value: 'onoffswitch',
                    raw: '"onoffswitch"',
                    loc: {
                      start: { line: 17, column: 32, offset: 341 },
                      end: { line: 17, column: 45, offset: 354 },
                      source: null,
                    },
                  },
                  loc: {
                    start: { line: 17, column: 23, offset: 332 },
                    end: { line: 17, column: 45, offset: 354 },
                    source: null,
                  },
                },
                {
                  type: 'Property',
                  key: {
                    type: 'Identifier',
                    value: 'elem',
                    raw: '"elem"',
                    loc: {
                      start: { line: 18, column: 23, offset: 378 },
                      end: { line: 18, column: 29, offset: 384 },
                      source: null,
                    },
                  },
                  value: {
                    type: 'Literal',
                    value: 'button',
                    raw: '"button"',
                    loc: {
                      start: { line: 18, column: 31, offset: 386 },
                      end: { line: 18, column: 39, offset: 394 },
                      source: null,
                    },
                  },
                  loc: {
                    start: { line: 18, column: 23, offset: 378 },
                    end: { line: 18, column: 39, offset: 394 },
                    source: null,
                  },
                },
              ],
              loc: {
                start: { line: 16, column: 19, offset: 308 },
                end: { line: 19, column: 20, offset: 414 },
                source: null,
              },
            },
          ],
          loc: {
            start: { line: 15, column: 26, offset: 288 },
            end: { line: 20, column: 16, offset: 430 },
            source: null,
          },
        },
        loc: {
          start: { line: 15, column: 15, offset: 277 },
          end: { line: 20, column: 16, offset: 430 },
          source: null,
        },
      },
    ],
    loc: {
      start: { line: 10, column: 11, offset: 148 },
      end: { line: 21, column: 12, offset: 442 },
      source: null,
    },
  },
];
