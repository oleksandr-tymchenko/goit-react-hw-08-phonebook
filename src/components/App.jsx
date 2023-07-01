import ContactForm from './ContactForm/ContactForm';

import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title1, Title2 } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';

const HomePage = lazy(() => import('Pages/Home/Home'));
const ContactsPage = lazy(() => import('Pages/Contacts/Contacts'));
const RegisterPage = lazy(() => import('Pages/Register'));
const LoginPage = lazy(() => import('Pages/Login'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
    // <Container>
    //   <Title1>Phonebook</Title1>
    //   <ContactForm />
    //   <Title2>Contacts</Title2>
    //   <Filter />
    //   <ContactList />
    // </Container>
  );
};
