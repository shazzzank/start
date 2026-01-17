import { CardType } from "@/utils/types";
import { Link } from "@tanstack/react-router";

export default function Cards(props: { data: CardType[] }) {
  return (
    <div className="cards">
      {props.data.map((item, idx) =>
        <div key={idx}>
          <Card {...item} />
        </div>
      )}
    </div>
  );
}

function Card(props: CardType) {
  return (
    <div
      className={`card ${props.type}`}
      style={props.bg ? { backgroundImage: `url(${props.bg})` } : undefined}
    >
      {props.type === 'basic' && (
        <div className="image">
          {props.image && (
            <img
              src={props.image}
              alt={props.heading ? `${props.heading} image` : 'card image'}
            />
          )}
        </div>
      )}
      <div className="info">
        {props.type === 'full' ? (
          <>
            {props.heading && <h2>{props.heading}</h2>}
            {props.text && <p>{props.text}</p>}
          </>
        ) : (
          <>
            <div>
              {props.heading && <h3>{props.heading}</h3>}
              {props.text && <p>{props.text}</p>}
            </div>
            <div className="footer">
              {props.subheading && <h2>{props.subheading}</h2>}
              {props.button && (
                <Link className="link" to={props.button.href}>
                  {props.button.name}
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
