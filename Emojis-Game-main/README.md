In this project, I had built an **Emoji Game** where all the 12 different emojis need to be clicked without repetition.

**Functionality** <br/>

The app have the following functionalities

- Initially, the _Score_ and _Total Score_ for the current game will be **0**
- When an **Emoji** is clicked,

  - If it is not the same as any of the previously clicked emojis, then the _Score_ gets incremented by one
  - If all the emojis are clicked exactly once

    - [Won Game] view will be displayed

  - If it is the same as any of the previously clicked emojis
    - [Lose Game] view will be displayed
  - If the score achieved in the current game is higher than the previous scores then the _Top Score_ will be updated accordingly

- When the _Play Again_ button is clicked, then we can be able to play the game again
  - The _Score_ value gets reset but not the _Top Score_ value
- The `EmojiGame` component receives the `emojisList` as a prop. It consists of a list of emoji objects with the following properties in each emoji object

  |    Key    | Data Type |
  | :-------: | :-------: |
  |    id     |  Number   |
  | emojiName |  String   |
  | emojiUrl  |  String   |

**Implementation Files:** <br/>

These are the files used to complete the implementation:

- `src/components/EmojiGame/index.js`
- `src/components/EmojiGame/index.css`
- `src/components/NavBar/index.js`
- `src/components/NavBar/index.css`
- `src/components/EmojiCard/index.js`
- `src/components/EmojiCard/index.css`
- `src/components/WinOrLoseCard/index.js`
- `src/components/WinOrLoseCard/index.css`
