import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeCards, setPokeCards] = useState([]);

  useEffect(
    () =>
      fetch(`http://localhost:3001/pokemon`)
        .then((r) => r.json())
        .then((data) => setPokeCards(data)),
    []
  );

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection pokeCards={pokeCards} />
    </Container>
  );
}

export default PokemonPage;
