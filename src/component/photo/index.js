import "./index.css";

export default function Photo({ src, name }) {
  return <img className="photo" alt={name} src={src} />;
}