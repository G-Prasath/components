import React, { useEffect } from 'react'
import Service from './Service'
import Spliting from './Service/Spliting'
import Benifites from './Service/Benifites'
import Banner from './Service/Banner'
import PebForm from './peb/PebForm'
import WhyChoose from './peb/WhyChoose'
import SignupSection from './peb/SignupSection'
import ServiceWhyChoose from './Service/ServiceWhyChoose'
import TestApp from './Service/TestApp'


import Profile from './career/Profile'
import Orders from './career/orders'
import Flows from './career/Flows'
import Batges from './career/Batges'
import Statistics from './career/Statistics'
import AddressCard from './career/AddressCard'
import CareerBenefits from './career/CareerBenefits'
import ContactForm from './career/ContactForm'

import CivilBenifites from './civil/CivilBenifites'
import CivilWhyChoose from './civil/CivilWhyChoose'
import CivilApplications from './civil/CivilApplications'
import Process from './civil/Process'
import CivilTechSpec from './civil/CivilTechSpec'
import CivilPortfolio from './civil/CivilPortfolio'
import CivilForm from './civil/CivilForm'

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
      <ServiceWhyChoose/>
      <TestApp/>

      {/* Carrers Pages  */}
      <Profile/>
      <Orders/>
      <Batges/>
      <Flows/>
      <Statistics/>
      <AddressCard/>
      <CareerBenefits/>
      <ContactForm/>

      {/* Civil Cons  */}
      <CivilBenifites /> 
      <CivilWhyChoose/>
      <CivilApplications/>
      <Process/>
      <CivilTechSpec/>
      <CivilPortfolio/>
      <CivilForm/>

    </div>
  )
}

export default App
