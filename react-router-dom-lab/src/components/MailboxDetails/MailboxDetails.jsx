import React from 'react';
import { useParams } from 'react-router';

// src/components/MailboxDetails/MailboxDetails.jsx
 const MailboxDetails = (props) => {

const { mailboxId } = useParams();
const selectedBox = props.mailboxes.find(
  (mailbox) => mailbox._id === Number(mailboxId)
);


return (
    <>
    <h2>{selectedBox.boxSize}Mailbox Details</h2>
    <p>size:{selectedBox.boxSize}</p>
    <p>owner:{selectedBox.boxOwner}</p>
    </>
  )
}

export default MailboxDetails