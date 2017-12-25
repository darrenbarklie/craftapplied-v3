import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Row, Col } from 'react-flexbox-grid'

import { Antelle,
         EnergeiaWorks,
         Europcar,
         FutureTech,
         JamesLeBosquet,
         Maccop } from './work'


export const Works = ({ match }) => (
  <Row className="page works">
    <Col xs={12} md={3}>
      
      <nav className="secondary">
        <ul>
          <li><Link to={`${match.url}/antelle`}>Antelle</Link></li>
          <li><Link to={`${match.url}/energeiaworks`}>EnergeiaWorks</Link></li>  
          <li><Link to={`${match.url}/europcar`}>Europcar</Link></li>    
          <li><Link to={`${match.url}/futuretech`}>Future Tech</Link></li>        
          <li><Link to={`${match.url}/jameslebosquet`}>James LeBosquet</Link></li>  
          <li><Link to={`${match.url}/maccop`}>MACCOP</Link></li>
        </ul>
      </nav>
      
    </Col>
    
    <Col xs={12} md={9} style={{backgroundColor: '#ccc'}}>
      
      <Route exact path={match.url} render={() => (
        <h3>Please select a project.</h3>
      )}/>
      
      <Route path={`${match.url}/antelle`} component={Antelle} />
      <Route path={`${match.url}/energeiaworks`} component={EnergeiaWorks} />
      <Route path={`${match.url}/europcar`} component={Europcar} />
      <Route path={`${match.url}/futuretech`} component={FutureTech} />
      <Route path={`${match.url}/jameslebosquet`} component={JamesLeBosquet} />
      <Route path={`${match.url}/maccop`} component={Maccop} />
      
    </Col>

  </Row>
)










// export const Works = () => {
//   return (
// 
// 
//     <Link to="antelle">Antelle</Link>
// 
    // <Route path="/antelle" component={Antelle} />
    
    
    
    
    // <Row className="page works">
    // 
    //   <Row id="works" className="section">
    //     <Col xs={12}>
    //       <p>We've collaborated with clients across multiple industries:</p>
    //     </Col>
    // 
    //     <Col xs={12} sm={6}>
    //       <WorkObject
    //         title="Europcar Station Native App"
    //         type="UI/UX Design"
    //         linkTo="/europcar"
    //         ratio="2/3"
    //         style={{
    //           color: '#202124',
    //           backgroundImage: `url(${EuropcarImg1x})`,
    //           backgroundPosition: 'left top'
    //         }} />
    //     </Col>
    // 
    //     <Col xs={12} sm={6}>
    //       <WorkObject
    //         title="EnergeiaWorks Website"
    //         type="Web Design & Development"
    //         linkTo="/energeiaworks"
    //         ratio="4/3"
    //         style={{
    //           color: '#202124',
    //           backgroundImage: `url(${EnergeiaImg1x})`,
    //           backgroundPosition: 'center top'
    //         }} />
    // 
    //         <WorkObject
    //           title="Global PR Network Website"
    //           type="Web Design & Development"
    //           linkTo="/globalprnetwork"
    //           ratio="4/3"
    //           style={{
    //             color: '#ffffff',
    //             backgroundImage: `url(${GlobalPRImg1x})`,
    //             backgroundPosition: 'center center'
    //           }} />
    //     </Col>
    // 
    //     <Col xs={12}>
    //       <WorkObject
    //         title="James LeBosquet Hairstyling Web App"
    //         type="Web App Design & Development"
    //         linkTo="/jameslebosquet"
    //         ratio="3/1"
    //         style={{
    //           color: '#202124',
    //           backgroundImage: `url(${JLBImg1x})`,
    //           backgroundPosition: 'center 10%'
    //         }} />
    //     </Col>
    //   </Row>
    // </Row>
//   )
// }
