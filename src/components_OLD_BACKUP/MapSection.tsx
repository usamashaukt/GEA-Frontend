import { useState, useEffect, useRef } from "react";
import "./MapSection.css";

const MapSection = () => {
  const [loadMap, setLoadMap] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7489189079834!2d72.92278587617557!3d33.998982420539896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfb3893e5b037b%3A0x1afc8cf35b859c45!2sHU%20CONSULTANTS!5e0!3m2!1sen!2s!4v1751889891479!5m2!1sen!2s";
  const googleMapsLink = "https://www.google.com/maps/place/HU+CONSULTANTS/@33.9989824,72.9227859,17z/data=!3m1!4b1!4m6!3m5!1s0x38dfb3893e5b037b:0x1afc8cf35b859c45!8m2!3d33.9989824!4d72.9253608!16s%2Fg%2F11c5qj5q5j?entry=ttu";

  useEffect(() => {
    if (loadMap) return;
    
    const element = containerRef.current;
    if (!element) return;

    // Use Intersection Observer to load map when it's about to be visible
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Load map when it's 200px before entering viewport
              setLoadMap(true);
              observer.disconnect();
            }
          });
        },
        { rootMargin: "200px", threshold: 0.01 }
      );
      observer.observe(element);
      return () => observer.disconnect();
    } else {
      // Fallback: load immediately if IntersectionObserver not supported
      setLoadMap(true);
    }
  }, [loadMap]);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-4">Find Us</h2>
          <div className="map-container" ref={containerRef}>
            {loadMap ? (
              <iframe
                src={mapUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HU Consultants Location"
              ></iframe>
            ) : (
              <div className="map-placeholder">
                <div className="map-placeholder-content">
                  <p>Loading map...</p>
                  <a 
                    href={googleMapsLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="map-link-button"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection; 