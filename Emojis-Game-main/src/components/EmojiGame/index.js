/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    presentScore: 0,
    topScore: 0,
    isFinished: false,
    checkList: {},
  }

  restart = () => {
    this.setState({
      presentScore: 0,
      isFinished: false,
      checkList: {},
    })
  }

  check = id => {
    const {checkList, presentScore, topScore} = this.state
    const condition = id in checkList
    if (!condition) {
      const newScore = presentScore + 1
      const newTopScore = newScore > topScore ? newScore : topScore
      const newCheckList = checkList
      checkList[id] = id
      this.setState({
        presentScore: newScore,
        topScore: newTopScore,
        checkList: newCheckList,
        isFinished: newScore === 12,
      })
    } else {
      this.setState(prevState => ({
        score: prevState.score,
        topScore: prevState.topScore,
        checkList: prevState.checkList,
        isFinished: true,
      }))
    }
  }

  render() {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const emojiList = shuffledEmojisList()
    const {presentScore, topScore, isFinished} = this.state
    return isFinished ? (
      <div className="bg-container">
        <NavBar pre={presentScore} top={topScore} stat={isFinished} />

        <WinOrLoseCard pre={presentScore} fn={this.restart} />
      </div>
    ) : (
      <div className="bg-container">
        <NavBar pre={presentScore} top={topScore} stat={isFinished} />
        <h1 className="desc">Dont click the same emoji twice</h1>
        <ul className="cards">
          {emojiList.map(each => (
            <EmojiCard details={each} key={each.id} checkTap={this.check} />
          ))}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
