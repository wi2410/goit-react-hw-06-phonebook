import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilterInput } from 'redux/selectors';

const handleFilterChange = (contacts, filter) => {
  if (filter) {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  return contacts;
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterInput);
  const filtredContacts = handleFilterChange(contacts, filterValue.filter);
  return (
    <ul>
      {filtredContacts.map(contact => {
        return <ContactItem key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};

export default ContactList;