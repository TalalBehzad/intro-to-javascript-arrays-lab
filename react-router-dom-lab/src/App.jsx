// src/App.jsx
import React, { useState } from 'react'
import MailboxForm from './components/MailboxForm/MailboxForm';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes} from 'react-router'
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
const initialState = [ 
  {
  _id: 1,
  boxSize: 'Small',
  boxOwner: 'Alex',
} 
];
const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState);
  const addMailbox = (newMailBox) => {
    newMailBox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailBox]);
  }
  return (
    <>
    <NavBar/>
      <h1>Welcome to MailBox!</h1>
      <Routes>
        <Route path='/' element={	<main><h1>Post Office</h1></main>}/>
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />}/>
        <Route path='/new-mailbox' element={<MailboxForm addMailbox={addMailbox}/>}/>
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} />}></Route>
        <Route path='*' element={<h1>Page does not exist</h1>}/>
      </Routes>
    </>
  )
}

export default App;