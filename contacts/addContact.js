const {v4} = require('uuid');
const listContacts = require('./listContacts');
const updateContacts = require('./helpers/updateContacts');

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContactId = v4();
  const newContact = { name, email, phone, id: newContactId };

  contacts.push(newContact)
  await updateContacts(contacts);

  return newContact;
}

module.exports = addContact