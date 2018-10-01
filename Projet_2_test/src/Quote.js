import React from "react";

const Quote = x => (
  <figure>
    <img src={x.image} alt={x.character} />
    <figcaption>
      <blockquote>{x.quote}</blockquote>
      <cite>{x.character}</cite>
    </figcaption>
  </figure>
);

export default Quote;