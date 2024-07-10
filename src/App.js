import { React, useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import {Navbar, Container, Form, Button, Row, Col} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';  
import './custom.scss';
import '@fontsource/roboto';
import './custom.css';

// Movie API Key: fe21826f

const apiURL = 'http://www.omdbapi.com?apikey=fe21826f';


function App() {

  const [movies, setMovies] = useState([]); // State of the current movie searched
  const [searchTerm, setSearchTerm] = useState(""); // State of the search input
  
  // Searching the movies in the API
  const searchMovies = async (movieTitle) => {
    const response = await fetch(`${apiURL}&s=${movieTitle}`); // Calling the API.
    const data = await response.json(); // Getting the data

    setMovies(data.Search);
  }

  useEffect(()=> {
    searchMovies("");
  }, [])

  return (
    <>
      <Navbar expand="md" className="bg-primary px-1 py-3 sticky-top">
        <Container fluid="lg">
          <Navbar.Brand href="#home" id="navTitle" className="fs-3 fw-medium p-0">CineWatch</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarExpand" className="border-0"/>
          <Navbar.Collapse id="navbarExpand" className="pt-3 pt-md-0 justify-content-md-end">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search..."
                className="me-2"
                aria-label="Search"
                id="search-input"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
              <Button 
                className="btn btn-secondary fw-semibold"
                onClick={() => {
                  searchMovies(searchTerm)
                }}  
              >
                <i class="bi bi-search"></i>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid="lg" className="py-5">
        <Row  className="row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center gy-5 gx-5"> 
          {
            movies && movies.length > 0 
            ? 
            (
              movies.map(
                (movie) => (
                  <MovieCard currentMovie={movie} />
                )
            )
            ) 
            : 
            (
              <Col className="col-12 col-md-12 col-xl-12 d-flex justify-content-center">
                <h2 className="display-4 fw-bold">Search a Movie</h2>
              </Col>
            )
          }
        </Row>
      </Container>
    </>
  );
}

export default App;
