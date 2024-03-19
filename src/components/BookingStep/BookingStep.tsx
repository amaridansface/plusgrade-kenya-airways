import "./booking-step.css";
import ReactMarkdown from "react-markdown";

function BookingStep(props: Props) {
  return (
    <>
      <div className="booking-step">
        <img
          src={props.image}
          className="booking-step-image"
          alt="booking-step-image"
        ></img>
        <div className="content">
          <img
            src={props.icon}
            className="booking-step-icon"
            alt="booking-step-icon"
          ></img>
          <div>
            <div className="booking-step-title"> {props.title} </div>
            <div className="booking-step-subtitle"> {props.subtitle} </div>
          </div>

          <div className="booking-step-description">
            <ReactMarkdown>{props.description}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

interface Props {
  image: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

export default BookingStep;
