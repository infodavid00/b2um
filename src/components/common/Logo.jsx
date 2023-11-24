
import data from '../../assets/b2um copycc copy.png'
let style = {
  width:'70px',
  height: 'auto'
}

export default function Logo() {
  return <img src={data} style={style} onClick={()=> window.location.href = '/'} />
} 