import { useEffect, useRef } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { To, useNavigate } from "react-router-dom";
import "./Destination.css";

const destinations = [
  {
    name: "United Kingdom",
    image: "/assets/images/big-ben/big-Ben-London.webp",
    imageSmall: "/assets/images/big-ben/big-Ben-London-small.webp",
    imageMedium: "/assets/images/big-ben/big-Ben-London-medium.webp",
    path: "/uk",
    isLocal: true,
  },
  {
    name: "Australia",
    image: "/assets/images/Aus-bg/sydney-opera-house.webp",
    imageSmall: "/assets/images/Aus-bg/sydney-opera-house-small.webp",
    imageMedium: "/assets/images/Aus-bg/sydney-opera-house-medium.webp",
    path: "/aus",
    isLocal: true,
  },
  {
    name: "USA",
    image: "/assets/images/usa/usa.webp",
    imageSmall: "/assets/images/usa/usa-small.webp",
    imageMedium: "/assets/images/usa/usa-medium.webp",
    path: "/usa",
    isLocal: true,
  },
  {
    name: "Europe",
    image: "/assets/images/Eu-bg/europe.webp",
    imageSmall: "/assets/images/Eu-bg/europe-small.webp",
    imageMedium: "/assets/images/Eu-bg/europe-medium.webp",
    path: "/eu",
    isLocal: true,
  },
];

const Destinations = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  const handleCardClick = (path: To) => {
    navigate(path); // Redirect to the specified path
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Destinations</h2>
      <Row>
        {destinations.map((destination, index) => (
          <Col key={index} md={3} className="mb-4">
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              className="card text-white shadow-lg border-0"
              onClick={() => handleCardClick(destination.path)}
              style={{ cursor: "pointer" }}
            >
              {destination.isLocal ? (
                <img
                  className="destination-img"
                  src={destination.imageMedium}
                  srcSet={`${destination.imageSmall} 231w, ${destination.imageMedium} 462w, ${destination.image} 924w`}
                  sizes="(max-width: 576px) 231px, (max-width: 768px) 231px, 231px"
                  alt={destination.name}
                  loading="lazy"
                  decoding="async"
                  width="231"
                  height="154"
                />
              ) : (
                <Card.Img
                  className="destination-img"
                  src={destination.image}
                  alt={destination.name}
                  loading="lazy"
                  decoding="async"
                />
              )}
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
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Destinations;
