import React from "react"
import { Link } from "react-router"

const MailBoxList = props => {
    return (
        <>
        <h2>MailBoxList</h2>
        <ul>
           {props.mailboxes.map((currentmailboxes) => (
            <li key={currentmailboxes.boxOwner}> 
            <Link to={`/mailboxes/${currentmailboxes._id}`}>
            {currentmailboxes.boxOwner}
            </Link>
            </li>
            
           ))}

        </ul>
        </>
    )
}

export default MailBoxList