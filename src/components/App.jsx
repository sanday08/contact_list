import React from "react";
import Contacts from "./contacts";
import Card from "./Card";

const person = (contact) => {
  return (
    <Card
      name={contact.name}
      img={contact.imgURL}
      email={contact.email}
      phone={contact.phone}
      key={contact.id}
    />
  );
};

function App() {
  console.log(person);
  return (
    <div>
      <h1 className="heading">Contacts</h1>
      {Contacts.map(person)}
    </div>
  );
}

export default App;
