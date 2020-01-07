export const json1 = `{
  "block": "warning",
  "elem": "content",
  "mods": {
    "size": "l",
    "space": "xl"
  }
}`;

export const json2 = `{
  "block": "warning",
  "content": [
      { "block": "text", "mods": { "size": "l" } },
      { "block": "text", "mods": { "size": "l" } }
  ],
  "mods": {
    "checked": true
  }
}`;

export const json3 = `{
  "block": "grid",
  "elem": "fraction",
  "elemMods": {
      "m-col": 2
  },
  "content": [
      {
          "block": "product",
          "mix": [
              {
                  "block": "card",
                  "mods": {
                      "view": "default",
                      "border": "all"
                  }
              }
          ],
          "content": [
              {
                  "block": "product",
                  "elem": "content",
                  "mix": [
                      {
                          "block": "card",
                          "elem": "content",
                          "elemMods": {
                              "space-a": "m"
                          }
                      }
                  ],
                  "content": [
                      {
                          "block": "product",
                          "elem": "image",
                          "mix": [
                              {
                                  "block": "theme",
                                  "mods": {
                                      "color": "project-inverse"
                                  }
                              }
                          ],
                          "content": [
                              {
                                  "block": "image"
                              }
                          ]
                      }
                  ]
              },
              {
                  "block": "product",
                  "elem": "footer",
                  "mix": [
                      {
                          "block": "card",
                          "elem": "footer",
                          "elemMods": {
                              "space-a": "m"
                          }
                      }
                  ],
                  "content": [
                      {
                          "block": "text",
                          "mods": {
                              "size": "m",
                              "view": "primary"
                          },
                          "content": [
                              {
                                  "block": "text",
                                  "elem": "word",
                                  "elemMods": {
                                      "width": "l"
                                  }
                              }
                          ]
                      },
                      {
                          "block": "text",
                          "mods": {
                              "size": "s",
                              "view": "primary"
                          },
                          "content": [
                              {
                                  "block": "text",
                                  "elem": "word",
                                  "elemMods": {
                                      "width": "m"
                                  }
                              }
                          ]
                      }
                  ]
              }
          ]
      }
  ]
}`;

export const json4 = `{
  "block": "warning",
  "content": [
      {
          "block": "placeholder",
          "mods": { "size": "m" }
      },
      {
          "elem": "content",
          "content": [
              {
                  "block": "text",
                  "mods": { "size": "m" }
              },
              {
                  "block": "text",
                  "mods": { "size": "l" }
              }
          ]
      }
  ]
}`;

export const array = [
  {
    children: [
      {
        key: {
          loc: {
            end: { column: 16, line: 4, offset: 54 },
            source: null,
            start: { column: 9, line: 4, offset: 47 },
          },
          raw: '"block"',
          type: 'Identifier',
          value: 'block',
        },
        loc: {
          end: { column: 24, line: 4, offset: 62 },
          source: null,
          start: { column: 9, line: 4, offset: 47 },
        },
        type: 'Property',
        value: {
          loc: {
            end: { column: 24, line: 4, offset: 62 },
            source: null,
            start: { column: 18, line: 4, offset: 56 },
          },
          raw: '"text"',
          type: 'Literal',
          value: 'text',
        },
      },
      {
        key: {
          loc: {
            end: { column: 32, line: 4, offset: 70 },
            source: null,
            start: { column: 26, line: 4, offset: 64 },
          },
          raw: '"mods"',
          type: 'Identifier',
          value: 'mods',
        },
        loc: {
          end: { column: 49, line: 4, offset: 87 },
          source: null,
          start: { column: 26, line: 4, offset: 64 },
        },
        type: 'Property',
        value: {
          children: [
            {
              key: {
                loc: {
                  end: { column: 42, line: 4, offset: 80 },
                  source: null,
                  start: { column: 36, line: 4, offset: 74 },
                },
                raw: '"size"',
                type: 'Identifier',
                value: 'size',
              },
              loc: {
                end: { column: 47, line: 4, offset: 85 },
                source: null,
                start: { column: 36, line: 4, offset: 74 },
              },
              type: 'Property',
              value: {
                loc: {
                  end: { column: 47, line: 4, offset: 85 },
                  source: null,
                  start: { column: 44, line: 4, offset: 82 },
                },
                raw: '"l"',
                type: 'Literal',
                value: 'l',
              },
            },
          ],
          loc: {
            end: { column: 49, line: 4, offset: 87 },
            source: null,
            start: { column: 34, line: 4, offset: 72 },
          },
          type: 'Object',
        },
      },
    ],
    loc: {
      end: { column: 51, line: 4, offset: 89 },
      source: null,
      start: { column: 7, line: 4, offset: 45 },
    },
    type: 'Object',
  },
  {
    children: [
      {
        key: {
          loc: {
            end: { column: 16, line: 5, offset: 106 },
            source: null,
            start: { column: 9, line: 5, offset: 99 },
          },
          raw: '"block"',
          type: 'Identifier',
          value: 'block',
        },
        loc: {
          end: { column: 24, line: 5, offset: 114 },
          source: null,
          start: { column: 9, line: 5, offset: 99 },
        },
        type: 'Property',
        value: {
          loc: {
            end: { column: 24, line: 5, offset: 114 },
            source: null,
            start: { column: 18, line: 5, offset: 108 },
          },
          raw: '"text"',
          type: 'Literal',
          value: 'text',
        },
      },
      {
        key: {
          loc: {
            end: { column: 32, line: 5, offset: 122 },
            source: null,
            start: { column: 26, line: 5, offset: 116 },
          },
          raw: '"mods"',
          type: 'Identifier',
          value: 'mods',
        },
        loc: {
          end: { column: 49, line: 5, offset: 139 },
          source: null,
          start: { column: 26, line: 5, offset: 116 },
        },
        type: 'Property',
        value: {
          children: [
            {
              key: {
                loc: {
                  end: { column: 42, line: 5, offset: 132 },
                  source: null,
                  start: { column: 36, line: 5, offset: 126 },
                },
                raw: '"size"',
                type: 'Identifier',
                value: 'size',
              },
              loc: {
                end: { column: 47, line: 5, offset: 137 },
                source: null,
                start: { column: 36, line: 5, offset: 126 },
              },
              type: 'Property',
              value: {
                loc: {
                  end: { column: 47, line: 5, offset: 137 },
                  source: null,
                  start: { column: 44, line: 5, offset: 134 },
                },
                raw: '"l"',
                type: 'Literal',
                value: 'l',
              },
            },
          ],
          loc: {
            end: { column: 49, line: 5, offset: 139 },
            source: null,
            start: { column: 34, line: 5, offset: 124 },
          },
          type: 'Object',
        },
      },
    ],
    loc: {
      end: { column: 51, line: 5, offset: 141 },
      source: null,
      start: { column: 7, line: 5, offset: 97 },
    },
    type: 'Object',
  },
];

export const object = {
  type: 'Object',
  loc: {
    end: {
      column: 4,
      line: 9,
      offset: 182,
    },
    start: {
      column: 11,
      line: 7,
      offset: 157,
    },
    source: null,
  },
  children: [
    {
      key: {
        loc: {
          end: { column: 14, line: 8, offset: 172 },
          source: null,
          start: { column: 5, line: 8, offset: 163 },
        },
        raw: '"checked"',
        type: 'Identifier',
        value: 'checked',
      },
      loc: {
        end: { column: 20, line: 8, offset: 178 },
        source: null,
        start: { column: 5, line: 8, offset: 163 },
      },
      type: 'Property',
      value: {
        loc: {
          end: { column: 20, line: 8, offset: 178 },
          source: null,
          start: { column: 16, line: 8, offset: 174 },
        },
        raw: 'true',
        type: 'Literal',
        value: true,
      },
    },
  ],
};

export const texts = [
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

export const errors1 = [
  {
    code: 'WARNING.TEXT_SIZES_SHOULD_BE_EQUAL',
    error: 'Тексты в блоке warning должны быть одного размера',
    location: {
      start: { column: 1, line: 1 },
      end: { column: 2, line: 22 },
    },
  },
];

export const foo = {
  type: 'Object',
  children: [
    {
      type: 'Property',
      key: {
        type: 'Identifier',
        value: 'block',
        raw: '"block"',
        loc: {
          start: { line: 2, column: 3, offset: 4 },
          end: { line: 2, column: 10, offset: 11 },
          source: null,
        },
      },
      value: {
        type: 'Literal',
        value: 'warning',
        raw: '"warning"',
        loc: {
          start: { line: 2, column: 12, offset: 13 },
          end: { line: 2, column: 21, offset: 22 },
          source: null,
        },
      },
      loc: {
        start: { line: 2, column: 3, offset: 4 },
        end: { line: 2, column: 21, offset: 22 },
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
          start: { line: 3, column: 3, offset: 26 },
          end: { line: 3, column: 12, offset: 35 },
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
        ],
        loc: {
          start: { line: 3, column: 14, offset: 37 },
          end: { line: 6, column: 4, offset: 145 },
          source: null,
        },
      },
      loc: {
        start: { line: 3, column: 3, offset: 26 },
        end: { line: 6, column: 4, offset: 145 },
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
          start: { line: 7, column: 3, offset: 149 },
          end: { line: 7, column: 9, offset: 155 },
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
                start: { line: 8, column: 5, offset: 163 },
                end: { line: 8, column: 14, offset: 172 },
                source: null,
              },
            },
            value: {
              type: 'Literal',
              value: true,
              raw: 'true',
              loc: {
                start: { line: 8, column: 16, offset: 174 },
                end: { line: 8, column: 20, offset: 178 },
                source: null,
              },
            },
            loc: {
              start: { line: 8, column: 5, offset: 163 },
              end: { line: 8, column: 20, offset: 178 },
              source: null,
            },
          },
        ],
        loc: {
          start: { line: 7, column: 11, offset: 157 },
          end: { line: 9, column: 4, offset: 182 },
          source: null,
        },
      },
      loc: {
        start: { line: 7, column: 3, offset: 149 },
        end: { line: 9, column: 4, offset: 182 },
        source: null,
      },
    },
  ],
  loc: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 10, column: 2, offset: 184 },
    source: null,
  },
};
