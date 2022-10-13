import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { keyframes } from 'styled-components';
import emailjs from 'emailjs-com';
import Squares4 from '../components/Background/Squares4';

const ContactStyles = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  flex-direction: column;
  transform-style: preserve-3d;
  z-index: -1;
`;

const ContactBoxStyles = styled.section`
  width: 60rem;
  height: 50rem;
  box-shadow: 5px -3px 12px rgba(0, 0, 0, 0.272);
  // backdrop-filter: blur(5px);
  margin: auto;
  background: linear-gradient(30deg, rgb(7, 7, 7) 2%, rgb(44, 44, 44) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  h1 {
    text-align: center;
    padding-top: 2rem;
    font-size: 3rem;
    color: white;
  }
  p {
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
    color: white;
  }
  @media (max-width: 700px) {
    width: calc(95vw - 4rem);
    height: 40rem;
    padding: 2rem;
  }
`;
const SmInputStyles = styled.input`
  width: 35rem;
  background-color:  rgba(156, 156, 156, 1);
  font-size: 16px;
  height: 3.5rem;
  border-radius: 3px;
  margin: 0.5rem;
  padding-left: 5px;
  padding-right: 8px;
  outline: none;
  border: none;
  font-weight:bold;
  @media(max-width: 700px) {
    width: 93%;
  }

  box-shadow: none;
  &::-webkit-input-placeholder {
    font-size: 16px;
    color: black;
    letter-spacing: 2px;
    font-weight: bold;
    padding-left: 5px;

`;

const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MessageStyles = styled.textarea`
  font-weight: bold;
  width: 35rem;
  background-color:  rgba(156, 156, 156, 1);
  font-size: 16px;
  height: 2.5rem;
  border-radius: 3px;
  margin: 0.5rem;
  padding: 5px;
  outline: none;
  height: 10rem;
  border: none;
  max-width: 40rem;
  @media(max-width: 700px) {
    width: calc(34rem - 10px);
  }
  &::-webkit-input-placeholder {
    font-size: 16px;
    color: black;
    letter-spacing: 2px;
    font-weight: bold;
    padding-left: 5px;
`;

const ButtonStyles = styled.button`
  margin-top: 2rem;
  width: 18rem;
  height: 4rem;
  background: linear-gradient(
    30deg,
    rgba(0, 172, 172, 0.1) 2%,
    rgb(0, 172, 172, 1) 100%
  );
  box-shadow: none;
  border: none;
  color: white;
  margin-bottom: 2rem;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 1.3rem;
  border-radius: 1rem;
`;

export default function Contact(props) {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  const [data, setData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const setName = (event) => {
    setData({ ...data, name: event.target.value });
    console.log(data.name);
  };

  const setEmail = (event) => {
    setData({ ...data, email: event.target.value });
    console.log(data.email);
  };

  const setSubject = (event) => {
    setData({ ...data, subject: event.target.value });
    console.log(data.email);
  };

  const setMessage = (event) => {
    setData({ ...data, message: event.target.value });
    console.log(data.message);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (data.message && data.email && data.name && data.subject) {
      emailjs
        .sendForm(
          'service_ro2cuti',
          'template_s21xd39',
          e.target,
          'NuJKY7TN3lZI1INci'
        )
        .then((res) => {
          console.log(res);
          setData({ name: '', email: '', message: '', subject: '' });
          document.getElementById('myForm').reset();
          alert('sent!');
        })
        .catch((err) => alert(err));
    } else {
      alert('Please fill out all fields!');
    }
  };

  return (
    <ContactStyles id="contact">
      <Squares4 />
      <ContactBoxStyles>
        <h1>CONTACT ME</h1>
        <p>Feel free to send me a message blablabla buzzwords</p>
        <FormStyles id="myForm" onSubmit={sendMessage}>
          <SmInputStyles
            type="text"
            name="name"
            placeholder="Name"
            onChange={setName}
            value={data.name}
          />

          <SmInputStyles
            type="text"
            name="email"
            placeholder="Email"
            onChange={setEmail}
            value={data.email}
          />

          <SmInputStyles
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={setSubject}
            value={data.Subject}
          />

          <MessageStyles
            placeholder="Message..."
            name="message"
            rows="60"
            onChange={setMessage}
            value={data.message}
          />
          <ButtonStyles type="submit">SEND</ButtonStyles>
        </FormStyles>
      </ContactBoxStyles>
    </ContactStyles>
  );
}
