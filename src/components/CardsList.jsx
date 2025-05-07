import  './card.css'
import Card from './Card'
import data from './data'

function CardsList() {
    console.log(data)
  return (
    <div className="conatiner ota">
      <h1>users</h1>
      <div className="box">
        {data.map(e=>{
            return <Card key = {e.id} props={e}></Card>
        })}
      </div>
    </div>
  )
}

export default CardsList
