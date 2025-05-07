import './card.css'
import apt from '../../src/apt.png'

function Card(props) {
  return (
    <div className="cardli">
        <div className="card-img">
            <img src={apt} alt="" />
        </div>
        <div className="card-text">
            <h2>{props.props.name}</h2>
            <p>{props.props.position}</p>
        </div>
    </div>
  )
}

export default Card
