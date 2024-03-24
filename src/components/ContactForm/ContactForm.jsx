import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from 'nanoid';
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
    name:
        Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    number:
        Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required")
});

const initialValues = {
    name: "",
    number: ""
};

const ContactForm = ({onAdd}) => {
    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
        onAdd({
            id: nanoid(),
            name: values.name,
            number: values.number
        });
		console.log(values);
		actions.resetForm();
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
        >
            <Form className={css.container}>
                <div className={css.input}>
                    <label className={css.label} htmlFor={nameFieldId}>Name</label>
                    <Field className={css.field} type="text" name="name" id={nameFieldId} />
                    <ErrorMessage name="name" as="span" />
                </div> 
                <div className={css.input}>
                    <label className={css.label} htmlFor={numberFieldId}>Number</label>
                    <Field className={css.field} type="text" name="number" id={numberFieldId} />
                    <ErrorMessage name="number" as="span" />
                </div>
                <button className={css.btn} type="submit">Add contact</button>
			</Form>
        </Formik>
    );
};

export default ContactForm;