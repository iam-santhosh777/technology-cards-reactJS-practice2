// Write your code here.
import './index.css'

const Cards = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card-item`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-paragraph">{description}</p>
      <div className="img-container">
        <img src={imgUrl} alt={title} className="card-img" />
      </div>
    </li>
  )
}

export default Cards
