// Write your code here.
import './index.css'

const NavBar = props => {
  const {pre, top, stat} = props

  return stat ? (
    <div className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
        className="logo"
      />
      <h1 className="item">Swaroop's Emoji Game</h1>
    </div>
  ) : (
    <div className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
        className="logo"
      />
      <h1 className="item">Swaroop's Emoji Game</h1>
      <div className="scores">
        <p className="item">Score: {pre}</p>
        <p className="item">Top Score: {top}</p>
      </div>
    </div>
  )
}

export default NavBar
