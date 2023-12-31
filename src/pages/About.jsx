import React from 'react'
import './About.css'

export default function About() {
  return (
    <div id='about'>
      <div className='heading'>About Us</div>
      <div className='content'>
        <p>Welcome to PropertyBroker!</p>
        <p>PropertyBroker is a disruptive real-estate platform that makes it possible to buy/sell/rent a house without paying any brokerage</p>
        <p>PropertyBroker was started because all of us believed that paying hefty brokerage can not be the only option to find a new home. As tenants, we have been paying these brokerages year on year without seeing any advantage of the broker. The only reason he existed was that there was a huge information asymmetry in the market. PropertyBroker is a platform that removes this information asymmetry and provides a marketplace for free exchange of this information that used to cost 1-2 months of rent as brokerage.</p>
        <p>We have done 2 things to help you find that perfect home:</p>
        <ul>
          <li>Firstly, we have painstakingly verified each listing and made sure that these are direct owners or shared accommodation parties and there are no middlemen or brokers. We use lot of heuristics and techniques to ensure that you get a totally broker free list.</li>
          <li>Secondly, we have also tried to ensure that maximum information is available to you in as easy to use format. This ensures that you get a very good idea of the property even before you visit it. Thus, you can shortlist flats sitting at the comfort of your home without actually traveling all the good and bad properties. This saves your time and effort and with a quick shortlist of 4-5 properties you can actually get a house in few hours!</li>
        </ul>
        <p>If you are a landlord interested in posting your apartments to PropertyBroker, please email us at <a href="email:contact@PropertyBroker.com">contact@PropertyBroker.com</a> and we will get in touch to help you list the property.</p>
        <p>And tenants, happy hunting and get in touch with us to let us know how else we can help!</p>
      </div>
    </div>
  )
}
