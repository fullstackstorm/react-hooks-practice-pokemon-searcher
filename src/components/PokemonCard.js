import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ card }) {
  const [showBack, setShowBack] = useState(false);
  const {
    id,
    name,
    hp,
    sprites: { front, back },
  } = card;

  function handleClick(){
    setShowBack((showBack) => !showBack);
  }

  return (
    <Card key={id} onClick={handleClick}>
      <div>
        <div className="image">
          {showBack ? (
            <img src={back} alt="oh no!" />
          ) : (
            <img src={front} alt="oh no!" />
          )}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
