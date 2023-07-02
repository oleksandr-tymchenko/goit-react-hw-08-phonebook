import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import React from 'react';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { FormCont, Label, Btn, Input, ErrMessage } from './ContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import { addContactThunk } from 'redux/contacts/operations';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const { items } = useSelector(getContacts);
  const dispatch = useDispatch();

  const existedContact = (items, values) => {
    return items.find(contact => contact.name === values.name);
  };

  const handleSubmit = (values, { resetForm }) => {
    if (existedContact(items, values)) {
      toast(`${values.name} is already in contacts`);
      resetForm();
      return;
    }

    dispatch(addContactThunk(values));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <FormCont>
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Jacob Mercer" />
          <ErrMessage name="name" component="div" />

          <Label htmlFor="number">Phone</Label>
          <Input
            type="tel"
            name="number"
            id="number"
            placeholder="080-111-77-55"
          />
          <ErrMessage name="number" component="div" />
          <Btn type="submit">add contact</Btn>
        </FormCont>
      </Form>
    </Formik>
  );
}

ContactForm.propTypes = {
  data: PropTypes.func,
};
