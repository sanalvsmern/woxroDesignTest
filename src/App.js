import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Row className='allContents'>
        <Col xs={12} className='closeButton'>
          <div>X</div>
        </Col>
        <Col xs={12} className="d-flex justify-content-center">
          <div className='contentCol1'>
            Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.
          </div>
        </Col>
        <Col xs={12} className="d-flex justify-content-center">
          <img src={process.env.PUBLIC_URL + '/images/fortnite-pictures-b5kfcchwazwiz3cs 1.png'} alt="Fortnite Screenshot" className="img-fluid" />
        </Col>
        <Col xs={12} className="d-flex justify-content-center">
          <div className='contentCol2'>
            Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
          </div>
        </Col>
        <Col xs={12}>
          <button className='butVisit'>Visit Website</button>
        </Col>
        <Col xs={12} className="d-flex justify-content-center">
          <div className='gameCards'>
            <Row>
              <Col lg={4} md={4} sm={6} xs={12}>
                <Row>
                  <Col xs={12}>
                    <img src={process.env.PUBLIC_URL + '/images/Mask group1.png'} alt="Mask group1" className="img-fluid" />
                  </Col>
                  <Col xs={12}>
                    <p className='gameCardText'>
                      Explore large, destructible environments where no two games are ever the same.
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col lg={4} md={4} sm={6} xs={12}>
                <Row>
                  <Col xs={12}>
                    <img src={process.env.PUBLIC_URL + '/images/Mask group2.png'} alt="Mask group2" className="img-fluid" />
                  </Col>
                  <Col xs={12}>
                    <p className='gameCardText'>
                      Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col lg={4} md={4} sm={6} xs={12}>
                <Row>
                  <Col xs={12}>
                    <img src={process.env.PUBLIC_URL + '/images/Mask group3.png'} alt="Mask group3" className="img-fluid" />
                  </Col>
                  <Col xs={12}>
                    <p className='gameCardText'>
                      Discover even more ways to play across thousands of creator-made game genres
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={12} className="d-flex justify-content-center">
          <Row>
            <Col xs={12} className="d-flex justify-content-center">
              <p className='contrHead'>
                Our Contribution
              </p>
            </Col>
            <Col xs={12} className="d-flex justify-content-center">
              <p className='contrBody'>
                Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={12} className="d-flex justify-content-center">
          <Row className='statistics'>
            <Col lg={4} md={4} sm={6} xs={12} >
              <Row className="d-flex justify-content-center">
                <Col xs={12} className="d-flex justify-content-center">
                  <p className='statValue'>
                    5M
                  </p>
                </Col>
                <Col xs={12} className="d-flex justify-content-center">
                  <p className='statDesc'>
                    Daily User Engagements
                  </p>
                </Col>
              </Row>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12} >
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <p className='statValue'>
                    $500K
                  </p>
                </Col>
                <Col xs={12} className="d-flex justify-content-center">
                  <p className='statDesc'>
                    Revenue Surge for an Platform
                  </p>
                </Col>
              </Row>
            </Col>
            <Col lg={4} md={4} sm={6} xs={12} >
              <Row>
                <Col xs={12} className="d-flex justify-content-center">
                  <p className='statValue'>
                    10X
                  </p>
                </Col>
                <Col xs={12} className="d-flex justify-content-center">
                  <p className='statDesc'>
                    ROAS on all our marketing campaigns
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={12} className="d-flex justify-content-center">
          <Row className='project'>
            <Col xs={12} className='projHead'>
              <p>
                Interested in delving deeper into the project?
              </p>
            </Col>
            <Col xs={12} className='projCont'>
              <p>
                If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at <span style={{ fontWeight: '800' }}>hello@abc.com</span> or give us a call at <span style={{ fontWeight: '800' }}> +91 480 20802730.</span>
              </p>
            </Col>
            <Col xs={12} className="d-flex justify-content-center">
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <button className='butInt' style={{ border: '1px solid white', backgroundColor: 'black', color: 'white' }}>Rating us on skype</button>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <button className='butInt' style={{ border: '1px solid black', backgroundColor: 'white', color: 'black' }}>Contact us</button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
          <p className='footerClass'>
            © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default App;
