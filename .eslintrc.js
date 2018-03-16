module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "func-names": [ "error", "never" ],
    "comma-dangle": ["error", "never"],
    "max-len": ["error", { "code": 150 }],
    "no-param-reassign": ["error", { "ignorePropertyModificationsFor": ["delta"] }],
    "quotes": ["error", "double"],
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    "no-mixed-operators": [
      "error",
      {
          "groups": [
              ["+", "-", "*", "/", "%", "**"],
              ["&", "|", "^", "~", "<<", ">>", ">>>"],
              ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
              ["&&", "||"],
              ["in", "instanceof"]
          ],
          "allowSamePrecedence": true
      }
  ],
    "no-undef": ["error", { "typeof": false }],
    "prefer-destructuring": ["error", {
      "array": false,
      "object": false
    }, {
      "enforceForRenamedProperties": false
    }]
  },
  "globals": {
    "Darkroom": true,
    "Image": true,
    "fabric": true,
    "document": true
}
};
