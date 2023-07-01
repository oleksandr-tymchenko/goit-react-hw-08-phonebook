import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Container, Title1, Title2 } from './App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

// import { TaskForm } from 'components/reduxComponents/TaskForm/TaskForm';
// import { fetchTasks } from 'redux/tasks/operations';
// import { TaskList } from 'components/reduxComponents/TaskList/TaskList';
// import { getIsLoading } from 'redux/tasks/selectors';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
// import { fetchTasks } from 'redux/tasks/operations';
// import { selectLoading } from 'redux/tasks/selectors';

export default function Contacts() {
  //   const dispatch = useDispatch();
  //   const isLoading = useSelector(getIsLoading);
  //   useEffect(() => {
  //     dispatch(fetchTasks());
  //   }, [dispatch]);

  return (
    // <>
    //   <Helmet>
    //     <title>Your tasks</title>
    //   </Helmet>
    //   <TaskForm />
    //   {/* <div>{isLoading && 'Request in progress...'}</div> */}
    //   <TaskList />
    // </>
    <Container>
      <Title1>Phonebook</Title1>
      <ContactForm />
      <Title2>Contacts</Title2>
      <Filter />
      <ContactList />
    </Container>
  );
}
