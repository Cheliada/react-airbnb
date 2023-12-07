import Heading from "../heading";
import "./index.css";

export default function Host({ ...contact_info }) {
  return (
    <div className="host">
      <List {...contact_info} />
    </div>
  );
}

function List({ name, image, response_rate, response_time, info, phone }) {
  return (
    <>
      <div className="host__block">
        <img className="host__photo" alt="HostPhoto" src={image} />
        <div className="host__header">
          <Heading>{name}</Heading>
          <div className="host__breadcrumbs-block">
            <span className="host__breadcrumbs">{phone}</span>
            <span className="host__breadcrumbs">{response_time}</span>
            <span className="host__breadcrumbs">
              {response_rate}% of the response speed
            </span>
          </div>
        </div>
      </div>
      <p className="host__info">{info}</p>
    </>
  );
}