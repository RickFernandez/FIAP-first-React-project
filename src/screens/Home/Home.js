import { HomeCss } from "./Home.css";
import axios from 'axios';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

import BackgroundImage from "../../assets/images/HomeBackgroundImage.jpg";
import NoprofilePic from "../../assets/images/NoProfilePic.webp";
import ExperienceIcon from "../../assets/icons/ExperienceIcon.svg";
import FormationIcon from "../../assets/icons/FormationIcon.svg";
import HobbiesIcon from "../../assets/icons/HobbiesIcon.svg";
import AboutIcon from "../../assets/icons/AboutIcon.svg";



export function Home() {
  return (
    <>   
    
      <section> 

        <div
          className="home-image"
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              backgroundImage: `url(${NoprofilePic})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <h3>Nome Sobrenome</h3>
        </div>

        <Container>
          <Row>
            <Col>
              <Navbar bg="light" variant="light">
                <Container>
                  <Navbar.Brand href="/Experience">
                    <img
                      alt="Experience Menu Icon"
                      src={ExperienceIcon}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                    />{" "}
                    Experiência
                  </Navbar.Brand>
                </Container>
              </Navbar>
            </Col>

            <Col>
              <Navbar bg="light" variant="light">
                <Container>
                  <Navbar.Brand href="/Formation">
                    <img
                      alt="Formation Menu Icon"
                      src={FormationIcon}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                    />{" "}
                    Formação
                  </Navbar.Brand>
                </Container>
              </Navbar>
            </Col>

            <Col>
              <Navbar bg="light" variant="light">
                <Container>
                  <Navbar.Brand href="/Hobbies">
                    <img
                      alt="Hobbies Menu Icon"
                      src={HobbiesIcon}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                    />{" "}
                    Hobbies
                  </Navbar.Brand>
                </Container>
              </Navbar>
            </Col>

            <Col>
              <Navbar bg="light" variant="light">
                <Container>
                  <Navbar.Brand href="/About">
                    <img
                      alt="About Menu Icon"
                      src={AboutIcon}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                    />{" "}
                    Sobre você
                  </Navbar.Brand>
                </Container>
              </Navbar>
            </Col>
          </Row>

          <div className="d-grid">
            <Button variant="success" size="lg">
              Log in
            </Button>
          </div>
        </Container>       

      </section>
    </>
  );
}
