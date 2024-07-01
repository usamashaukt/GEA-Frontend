import ContactBtn from "./ContactBtn";
import "./Section3.css";
interface Props {
  services: Array<any>;
  children: any;
  title: string;
  mainStyles?: any;
}

const Section3 = ({ children, services, title, mainStyles }: Props) => {
  return (
    <div style={mainStyles}>
      <div className="introduction">
        <div className="container">
          <div className="row">
            <h2 className="welcome-line text-center mt-4">{title}</h2>
            {children}
            <div className="inner-img d-flex flex-wrap justify-content-center home-img-wrapper clearfix">
              {services.map((service: any, i: number) => (
                <div
                  key={i}
                  className="col-lg-2 col-sm-6 col-xs-12 text-center p-3 pb-0"
                >
                  <a href={service.link}>
                    <img
                      src={service.src}
                      alt={service.alt}
                      className="img-fluid"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ContactBtn />
    </div>
  );
};

export default Section3;
[];
