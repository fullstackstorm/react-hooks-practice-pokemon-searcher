import React, {useContext} from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";
import { SearchContext } from "./SearchContext";

function PokemonCollection({ pokeCards }) {
  const { searchQuery } = useContext(SearchContext);

  const filteredCards = searchQuery
    ? pokeCards.filter((card) =>
        card.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : pokeCards;

  return (
    <Card.Group itemsPerRow={6}>
      {filteredCards.map((card) => {
        return <PokemonCard key={card.id} card={card} />;
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
