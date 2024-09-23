import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [googleMapLink, setGoogleMapLink] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault;
    try {
      const response = axios.post("http://localhost:3000/create", {
        name: name,
        address: address,
        phoneNumber: phoneNumber,
        website: website,
        googleMapLink: googleMapLink,
      });
      alert("Bien enregistré ! ");
    } catch (error) {}
  };

  return (
    <div>
      <h1>Ajout d'un club</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom du club"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Adresse"
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="06 78 62 89 12"
          value={phoneNumber}
          onChange={(event) => {
            setPhoneNumber(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="site web"
          value={website}
          onChange={(event) => {
            setWebsite(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="lien google map"
          value={googleMapLink}
          onChange={(event) => {
            setGoogleMapLink(event.target.value);
          }}
        />
        <button type="submit">enregister</button>
      </form>
    </div>
  );
}

export default App;
