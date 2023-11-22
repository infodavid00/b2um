
import './Card.css'

export default function Card({data,col}) {
 return (
   <div className='card'>
     <div className='card-cont'>
     <button className='card-btn' >{data.offers} offers</button>
     </div>
     <span style={{color:col}}>{data.title}</span>
   </div>
 )
}