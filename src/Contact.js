import React from 'react';

const Contact = () => {
  return (
    <div style={{ textAlign: 'center', margin: '40px auto', maxWidth: '600px' }}>
      <h2>Contact Us</h2>
      <p>If you are interested in booking a tour or have any questions, feel free to reach out to us!</p>
      
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label><br />
        
        <label>
          Email:
          <input type="email" name="email" />
        </label><br />
        
        <label>
          Message:
          <textarea name="message"></textarea>
        </label><br />
        
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
