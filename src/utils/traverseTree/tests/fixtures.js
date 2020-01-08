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
