import { Link } from "@tanstack/react-router";
import { HeroType } from "@/utils/types";

export default function Hero(props: HeroType) {
  return (
    <div className="hero">
      <div>
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
        <Link to={props.button.href} className="link">{props.button.name}</Link>
      </div>
      <img src={props.image} alt="hero image" />
    </div>
  )
}
