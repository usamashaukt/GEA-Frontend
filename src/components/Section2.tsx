import React, { useEffect, useRef } from "react";
import "./Section2.css";

const Section2 = () => {
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

  return (
    <div>
      <div className="global-imgs">
        <div className="container-fluid mb-4 mx-auto ">
          <div className="row">
            {[0, 1, 2, 3].map((i) => (
              <div className="col-lg-3" key={i}>
                <div
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="card"
                >
                  <div className="card-body">
                    <img
                      className="card-img"
                      height={"198"}
                      src={`/assets/images/studentpics/student${i + 1 > 2 ? 3 : i + 1}.webp`}
                      alt=""
                    />
                    <h5 className="card-title">
                      {i === 0
                        ? "Undergraduate"
                        : i === 1
                        ? "PostGraduate"
                        : i === 2
                        ? "MRes"
                        : "PhDs"}
                    </h5>
                    <p className="card-text">
                      {i === 0
                        ? "Explore basic undergraduate programs and courses."
                        : i === 1
                        ? "Dive deeper with advanced specializations."
                        : "Engage in research and innovation at the highest level."}
                    </p>
                    <a href="#" className="btn btn-primary">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
