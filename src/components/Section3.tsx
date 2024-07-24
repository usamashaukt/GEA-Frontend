import ContactBtn from "./ContactBtn";
import "./Section3.css";
interface Props {
  imgServices: Array<any>;
  description: any;
  title: string;
  mainStyles?: any;
  btnColor: any;
}

const Section3 = ({
  description,
  btnColor,
  imgServices,
  title,
  mainStyles,
}: Props) => {
  return (
    <div style={mainStyles}>
      <div className="introduction">
        <div className="container">
          <div className="row">
            <h2 className="welcome-line text-center  mt-4">{title}</h2>
            {description}
            <div className="inner-img d-flex flex-wrap justify-content-center home-img-wrapper clearfix">
              {imgServices.map((imgService: any, i: number) => (
                <div
                  key={i}
                  className="col-lg-2 col-sm-6 col-xs-12 text-center p-3 pb-0"
                >
                  <a className="" href={imgService.link}>
                    <img
                      src={imgService.src}
                      alt={imgService.alt}
                      className="img-fluid"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ContactBtn btnColor={btnColor} />
    </div>
  );
};

export default Section3;
[];
