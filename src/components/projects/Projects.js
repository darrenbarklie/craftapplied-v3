import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { Row, Col } from 'react-flexbox-grid'

import { Antelle,
         EnergeiaWorks,
         Europcar,
         FutureTech,
         JamesLeBosquet,
         Maccop } from './project'


export const Projects = ({ match }) => (
  <Row className="page projects">
    <Col xs={12} md={3}>
      
      <nav className="secondary">
        <h2 className="subheader-text">Projects:</h2>
        <ul>
          
          <li><NavLink activeClassName="active"
            to={`${match.url}/antelle`}>
            Antelle Website</NavLink></li>
            
          <li><NavLink activeClassName="active"
            to={`${match.url}/energeiaworks`}>
            EnergeiaWorks Marketing</NavLink></li>
            
          <li><NavLink activeClassName="active"
            to={`${match.url}/europcar`}>
            Europcar Kiosk App</NavLink></li>
             
          <li><NavLink activeClassName="active"
            to={`${match.url}/futuretech`}>
            Future Tech Website</NavLink></li>
                   
          <li><NavLink activeClassName="active"
            to={`${match.url}/jameslebosquet`}>
            James LeBosquet</NavLink></li>
            
          <li><NavLink activeClassName="active"
            to={`${match.url}/maccop`}>
            MACCOP</NavLink></li>
            
        </ul>
      </nav>
      
    </Col>
    
    <Col xs={12} md={9}>
      
      
      {/* TODO : Add the dashboard component */}
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
//     <NavLink to="antelle">Antelle</NavLink>
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
    //         NavLinkTo="/europcar"
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
    //         NavLinkTo="/energeiaworks"
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
    //           NavLinkTo="/globalprnetwork"
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
    //         NavLinkTo="/jameslebosquet"
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
