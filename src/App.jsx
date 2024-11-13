import React, { useEffect } from 'react'
import Service from './Service'
import Spliting from './Service/Spliting'
import Benifites from './Service/Benifites'
import Banner from './Service/Banner'
import PebForm from './peb/PebForm'

const App = () => {

  return (
    <div>
      <Banner/>
      <Service/>
      <Spliting/>
      <Benifites/>
      <PebForm/>
    </div>
  )
}

export default App
