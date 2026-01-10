import "@/styles/cards.css";

type Product = {
  bg?: string;
  image?: string;
  subtext?: string;
  slug?: string;
  heading?: string;
  subheading: string;
  button?: string;
}

export default function Cards({ data }) {
  return (
    <div id="cards-container">
      {data.map((item: Product, idx: number) => {
        if (item.bg) {
          return (
            <div
              id="card-container-center"
              style={{ backgroundImage: `url(${item.bg})` }}
              key={idx}
            >
              <h5 id="card-heading">{item.heading}</h5>
            </div>
          );
        } else {
          return (
            <div id="card-container" key={idx}>
              <div id="card-image-wrapper">
                <img id="card-image" src={item.image} alt="card image" />
              </div>
              <div id="card-info">
                <div>
                  <h6 id="card-subheading">{item.subheading}</h6>
                  <p id="card-subtext">{item.subtext}</p>
                </div>
                <div id="card-footer">
                  <h5 id="card-heading">{item.heading}</h5>
                  <button id="card-button">{item.button}</button>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
