import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

const Contact = ({data: {id, name, number}, onDelete}) => {
    return (
        <>
            <div className={css.text}>
                <p>
                    <FaUser />
                    {name}
                </p>
                <p>
                    <BsFillTelephoneFill />
                    {number}
                </p>
            </div>
            <button className={css.btn} onClick={() => onDelete(id)}>
                Delete
            </button>
        </>      
    );
};

export default Contact;