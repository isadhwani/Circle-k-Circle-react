import React from 'react';

const EmailLink = () => {
  const recipients = 'recipient1@example.com,recipient2@example.com';
  const subject = 'Your email subject';
  const body = 'Your email body';

  const mailtoLink = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a href={mailtoLink} target="_blank" rel="noopener noreferrer">
      Open Email Draft
    </a>
  );
};

export default EmailLink;