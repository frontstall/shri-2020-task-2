export const objectJson = `{
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

export const objectResult = [
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

export const arrayJson = `[
  {
      "block": "text",
      "mods": { "type": "h1" }
  },
  {
      "block": "text",
      "mods": { "type": "h1" }
  }
]`;

export const arrayResult = [
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
];
