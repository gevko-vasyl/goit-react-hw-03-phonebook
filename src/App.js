import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Container from "components/Container/Container";
import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("contacts"));
    data && setContacts(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmitForm = (name, number) => {
    const contactId = nanoid();
    preventDuplicateContact(name) &&
      setContacts([...contacts, { name, number, id: contactId }]);
  };

  const handleDeleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const preventDuplicateContact = (name) => {
    const filteredContacts = contacts.filter((contact) => {
      contact.name.includes(name) &&
        alert(`${name} already exists in contacts`);
      return contact.name.includes(name);
    });

    return filteredContacts.length !== 1;
  };

  return (
    <Container>
      <ContactForm addContact={handleSubmitForm} />

      <Filter onFilterChange={handleFilterChange} />
      <ContactList
        contacts={getFilteredContacts()}
        onDelete={handleDeleteContact}
      />
    </Container>
  );
}

export default App;
