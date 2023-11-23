
import React from 'react'
import Header from '../../components/category/Header.jsx'
import Footer from '../../components/common/Footer.jsx'
import SearchH from '../../components/category/Search.jsx'
import data from '../../datasets/categories.json'
import './Category.css'

function Cards({data}) {
 return (
  <div className='category-card-container'>
    <img src={data.poster} className='category-card-img'/>
    <h3 className='category-card-header' >{data.title}</h3>
    <div style={{display:'flex',flexDirection:'row',gap:'1em'}}>
      <button className='category-card-offers'>{data.offers} offers</button>
      <button style={{backgroundColor:'transparent',border:'none',outline:'none',fontSize:'15px',fontWeight:700,color:'rgba(10,10,10,0.5)'}}>selling for {data.from} usd</button>
    </div>
  </div>
 )
}

export default function Category() {
  return (
    <div>
     <Header title={'Razer Gold Gift Card'} />
     <div style={{marginTop: '6em'}} className='category-body'>
      <SearchH />
      <div style={{ fontWeight:600, color:'rgba(10,10,10,0.7)', marginTop:'1em', marginLeft:'0.5em'}}>query for {data.searchResultscount} results</div>
      {/* cards here */}
      <div className='category-card-body'>
      {data.data.map((element,index) => <Cards key={index} data={element} />)}
      </div>
      {/* cards here */}
      <div className='category-paginate'>
        <button>Previous</button>
        <button style={{backgroundColor:'rgb(150,150,250)', fontFamily:700,color:'white'}}>Next</button>
      </div>
     </div>
     <Footer />
    </div>
  )
}
