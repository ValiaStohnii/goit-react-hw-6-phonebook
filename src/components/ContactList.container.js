import { connect } from 'react-redux';
import contactsAction from '../redux/contacts/contacts-actions';
import ContactList from './ContactList';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsAction.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
