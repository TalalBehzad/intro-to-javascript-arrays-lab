import { useState } from 'react';
import { useNavigate } from 'react-router';
const initialState = {
  boxOwner: '',
  boxSize: 0,
};
const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addMailbox(formData);
    setFormData(initialState);
    navigate('/mailboxes');
  };
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
    console.log("form data", formData)
  };
  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">boxOwner:</label>
        <input
          type="text"
          id="boxOwner"
          name="boxOwner"
          value={formData.boxOwner}
          onChange={handleChange}
        />
<label htmlFor="boxSize">boxSize:</label>
<select
  id="boxSize"
  name="boxSize"
  value={formData.boxSize}
  onChange={handleChange}
>
  <option value="Small">Small</option>
  <option value="Medium">Medium</option>
  <option value="Large">Large</option>
</select>
        <button type="submit">create MailBox</button>
      </form>
    </main>
  );
};
export default MailboxForm; 