
import React from 'react'
import Header from '../../components/category/Header.jsx'
import Footer from '../../components/common/Footer.jsx'
import SearchH from '../../components/category/Search.jsx'

export default function Category() {
  return (
    <div>
     <Header title={'Razer Gold Gift Card'} />
     <div style={{marginTop: '6em'}}>
      <SearchH />
     </div>
     <Footer />
    </div>
  )
}
