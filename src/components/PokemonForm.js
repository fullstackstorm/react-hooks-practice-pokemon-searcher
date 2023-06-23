import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddMon }) {
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [frontUrl, setFrontUrl] = useState("");
  const [backUrl, setBackUrl] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const newMon = {
      id: parseInt(frontUrl.match(/\d+/)[0]),
      name: name,
      hp: parseInt(hp),
      sprites: {
        front: frontUrl,
        back: backUrl,
      },
    };

    await fetch(`http://localhost:3001/pokemon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMon),
    })
      .then((r) => r.json())
      .then((data) => onAddMon(data));
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(event) => {
          console.log("submitting form...");
          handleSubmit(event);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={(e) => (setName(e.target.value))} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={(e) => (setHp(e.target.value))} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontUrl}
            onChange={(e) => (setFrontUrl(e.target.value))}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backUrl}
            onChange={(e) => (setBackUrl(e.target.value))}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
