const phoneBook = {
  contacts: [
    { name: "Ponchik", phone: 380562198324, email: "ponchik@mail.com" },
    { name: "Pirozok", phone: 380973214563, email: "pirozok@mail.com" },
    { name: "Bublick", phone: 380731295958, email: "bublick@mail.com" },
    { name: "Surnick", phone: 380964598555, email: "cheesy@mail.com" },
  ],
  getContactByName(propName) {
    const user = this.contacts.find((item) => item.name === propName);
    if (!user) {
      return "Сontact with this name not found";
    }
    return user;
  },

  addNewContact(newContact) {
    for (let i = 0; i < this.contacts.length; i += 1) {
      if (
        newContact.name === this.contacts[i].name ||
        newContact.phone === this.contacts[i].phone ||
        newContact.email === this.contacts[i].email
      ) {
        return `Error! Сontact with ${newContact.name} is already in your phonebook!`;
      }
    }
    this.contacts.push(newContact);
  },
};

console.log(phoneBook.getContactByName("Pirozok"));
console.log(phoneBook.getContactByName("Surnick"));
console.log(phoneBook.getContactByName("Ice"));
console.log(phoneBook.contacts);
console.log(
  phoneBook.addNewContact({
    name: "Vanini",
    phone: 32045853323,
    email: "v_a_n_i_n_i@mail.com",
  })
);
console.log(phoneBook.contacts);
