import { useEffect, useRef } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { To, useNavigate } from "react-router-dom";
import "./Destination.css";

const getResponsiveImageProps = (src: string) => {
  // Keep `src` unchanged; provide optional `srcSet` for browsers to pick a smaller file.
  switch (src) {
    case "/assets/images/Aus-bg/sydney-opera-house.webp":
      return {
        srcSet: [
          "/assets/images/Aus-bg/sydney-opera-house-256.webp 256w",
          "/assets/images/Aus-bg/sydney-opera-house-512.webp 512w",
          "/assets/images/Aus-bg/sydney-opera-house-1024.webp 1024w",
          "/assets/images/Aus-bg/sydney-opera-house.webp 1600w",
        ].join(", "),
        sizes: "(max-width: 768px) 100vw, (max-width: 992px) 50vw, 25vw",
      } as const;
    case "/assets/images/big-ben/big-Ben-London.webp":
      return {
        srcSet: [
          "/assets/images/big-ben/big-Ben-London-256.webp 256w",
          "/assets/images/big-ben/big-Ben-London-512.webp 512w",
          "/assets/images/big-ben/big-Ben-London-1024.webp 1024w",
          "/assets/images/big-ben/big-Ben-London.webp 1600w",
        ].join(", "),
        sizes: "(max-width: 768px) 100vw, (max-width: 992px) 50vw, 25vw",
      } as const;
    default:
      return {} as const;
  }
};

const destinations = [
  {
    name: "United Kingdom",
    image:
      "/assets/images/big-ben/big-Ben-London.webp",
    path: "/uk", // Add a path for redirection
  },
  {
    name: "Australia",
    image:
      "/assets/images/Aus-bg/sydney-opera-house.webp",
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
              onClick={() => handleCardClick(destination.path)} // Add click handler
              style={{ cursor: "pointer" }} // Add pointer cursor for better UX
            >
              <Card.Img
                className="destination-img"
                src={destination.image}
                alt={destination.name}
                loading="lazy"
                decoding="async"
                {...getResponsiveImageProps(destination.image)}
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
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Destinations;
