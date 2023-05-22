import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Outlet, useNavigate } from 'react-router-dom';
import Logo from '../assets/pokedex_logo.png'
import { FilterBar } from './filterBar';
import UsePokeContext from '../hooks/UsePokeContext';

function Hearder() {
  const {onInputChange, onResetForm} = UsePokeContext();
  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/search", {
      state: e.target[0].value.toLowerCase(),
    });
    onResetForm();
  }
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="danger"  expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/"><img src={Logo} alt='' style={{height:"50px"}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Pokemon Search
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form className="d-flex" onSubmit={onSearchSubmit}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"  
                    onChange={onInputChange}
                  />
                  <Button variant="outline-success" type='submit'>Search</Button>
                </Form>
                <FilterBar key={"filterbar"}/>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Outlet/>
    </>
  );
}

export default Hearder;
