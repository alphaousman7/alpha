import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Profileeleve from "../../../Student/Profile/profile";
import Connexion from '../../../Authentification/Connexion/Identification';
import Homefunc from "../../../Home/homee";
import Aproposfonc from "../../../Apropos/apropos";
import Imagefonction from "../../../Image/imagee";
import Inscriptionfunc from "../../../Authentification/Inscripption/inscription";

import {BrowserRouter ,Route,Routes} from "react-router-dom";

export default function Navbarr() {
  return (
    <div>
      <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home"><h3>Classe-Registre</h3></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"> 
          <Nav.Link href="/maison">Home</Nav.Link>
          <Nav.Link href="/apropos">A-propos-de-nous</Nav.Link>
          <Nav.Link href="/image">Nos-images</Nav.Link>
          <Nav.Link href="/identifi">Se connexion</Nav.Link>
          <NavDropdown title="Vision profile" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
            <NavDropdown.Item href="/elev">
              Profile eleve
            </NavDropdown.Item>
            <NavDropdown.Item href="/prof">Profile proffesseur</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

          <NavDropdown title="S'inscrire" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
            <NavDropdown.Item href="/inscripti">Cliquez ici ...
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  <div>
    <BrowserRouter>
        <Routes>
 
          <Route path="/identifi" element={<Connexion/>} />
          <Route path='/elev' element={<Profileeleve />} />
          <Route path='/maison' element={<Homefunc />} />
          <Route path='/apropos' element={<Aproposfonc />} />
          <Route path='/image' element={ <Imagefonction />} />
          <Route path='/inscripti' element={ <Inscriptionfunc />} />

        </Routes>
  </BrowserRouter>
  </div>
  </div>
  )
}
