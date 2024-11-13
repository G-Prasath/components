import React, { useEffect } from 'react'
import Service from './Service'
import Spliting from './Service/Spliting'
import Benifites from './Service/Benifites'
import Banner from './Service/Banner'
import PebForm from './peb/PebForm'
import WhyChoose from './peb/WhyChoose'
import SignupSection from './peb/SignupSection'

const App = () => {

  return (
    <div>
      <Banner/>
      <Service/>
      <Spliting/>
      <Benifites/>
      <PebForm/>
      <WhyChoose/>
      <SignupSection/>
    </div>
  )
}

export default App
