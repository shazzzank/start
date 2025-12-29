import { NewsletterType } from "@/utils/types";

export default function Newsletter(props: NewsletterType) {
  return (
    <div className="newsletter">
      <div className="wrapper">
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
        <div className="input">
          <input name="newsletter" placeholder={props.button.placeholder} />
          <button onClick={props.button.onClick}>{props.button.name}</button>
        </div>
      </div>
    </div>
  );
}
