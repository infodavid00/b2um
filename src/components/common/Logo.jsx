
let style = {
  fontSize: '28px',
  fontWeight: 900,
  color: 'transparent',
  backgroundImage: 'linear-gradient(45deg, #ff5733 , rgba(0,0,0,0.8))', 
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text'
}

export default function Logo() {
  return <span style={style}>B2UM</span>
} 