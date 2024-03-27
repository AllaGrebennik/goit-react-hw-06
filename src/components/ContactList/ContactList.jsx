import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from '../Contact/Contact';
import css from "./ContactList.module.css";

function ContactList() {
    const filterContacts = useSelector(selectNameFilter);
    const listContacts = useSelector(selectContacts);
    const filteredContacts = listContacts.filter(
        (contact) =>
            contact.name && contact.name.toLowerCase().includes(filterContacts.name.toLowerCase())
    );

    return (
        <ul className={css.list}>
            {filteredContacts.map((contact) => (
                <li className={css.item} key={contact.id}>
                    <Contact data={contact} />
                </li>
            ))}
        </ul>
    );
};

export default ContactList;