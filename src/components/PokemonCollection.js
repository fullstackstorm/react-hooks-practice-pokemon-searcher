import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokeCards }) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokeCards.map((card) => {
        return <PokemonCard card={card} />;
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
