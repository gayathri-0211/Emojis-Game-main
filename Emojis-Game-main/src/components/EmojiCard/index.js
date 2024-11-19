// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details, checkTap} = props
  const {id, emojiName, emojiUrl} = details

  const press = () => {
    checkTap(id)
  }
  return (
    <li className="cardd">
      <button type="button" className="btn" onClick={press}>
        <img src={emojiUrl} alt={emojiName} className="image" />
      </button>
    </li>
  )
}
export default EmojiCard
