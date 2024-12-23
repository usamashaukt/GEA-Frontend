// import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { To, useNavigate } from "react-router-dom";
import "./Destination.css";

const destinations = [
  {
    name: "United Kingdom",
    image:
      "https://cdn.britannica.com/01/94501-050-7C939333/Big-Ben-London.jpg",
    path: "/uk", // Add a path for redirection
  },
  {
    name: "Australia",
    image:
      "https://www.bondi38.com.au/wp-content/uploads/2023/04/top-view-of-sydney-australia-opera-house-sydney-2022-11-16-14-05-33-utc-scaled.webp",
    path: "/aus", // Add a path for redirection
  },
  {
    name: "USA",
    image:
      "https://www.gamsatreviewblog.com/content/images/2020/01/Gamsat-in-USA.jpg",
    path: "/usa", // Add a path for redirection
  },
  {
    name: "Europe",
    image:
      "https://media.restless.co.uk/uploads/2022/12/the-cheapest-countries-to-visit-in-europe.jpg",
    path: "/eu", // Add a path for redirection
  },
];

const Destinations = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleCardClick = (path: To) => {
    navigate(path); // Redirect to the specified path
  };

  return (
    <Container fluid className="my-5">
      <h2 className="text-center mb-4">Destinations</h2>
      <Row>
        {destinations.map((destination, index) => (
          <Col key={index} md={3} className="mb-4">
            <Card
              className="text-white shadow-lg border-0"
              onClick={() => handleCardClick(destination.path)} // Add click handler
              style={{ cursor: "pointer" }} // Add pointer cursor for better UX
            >
              <Card.Img
                className="destination-img"
                src={destination.image}
                alt={destination.name}
              />
              <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                <Card.Title
                  className="destination-title"
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "0.5rem 1rem",
                    borderRadius: "5px",
                  }}
                >
                  {destination.name}
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Destinations;
