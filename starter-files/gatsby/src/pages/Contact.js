import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { keyframes } from 'styled-components';
import emailjs from 'emailjs-com';

const OrbAnimation = keyframes`
0% {opacity: 1; }
50% {opacity: 0.2;}
100% {opacity: 1;}
`;

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
  backdrop-filter: blur(5px);
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  h1 {
    text-align: center;
    padding-top: 2rem;
    font-size: 3rem;
  }
  p {
    text-align: center;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  @media (max-width: 700px) {
    width: calc(95vw - 4rem);
    height: 40rem;
    padding: 2rem;
  }
`;
const SmInputStyles = styled.input`
  width: 35rem;
  background-color:  rgba(176, 176, 176, 0.204);
  font-size: 14px;
  height: 3.5rem;
  border-radius: 3px;
  margin: 0.5rem;
  padding-left: 1rem;
  padding-right: 8px;
  outline: none;
  border: none;
  font-weight:bold;
  @media(max-width: 700px) {
    width: 90%;
  }

  box-shadow: none;
  &::-webkit-input-placeholder {
    font-size: 14px;
    color: black;
    letter-spacing: 2px;
    font-weight: bold;
    padding-left: 1rem;

`;

const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MessageStyles = styled.textarea`

  width: 35rem;
  background-color:  rgba(176, 176, 176, 0.204);
  font-size: 14px;
  height: 2.5rem;
  border-radius: 3px;
  margin: 0.5rem;
  padding: 7px;
  outline: none;
  height: 10rem;
  border: none;
  max-width: 40rem;
  @media(max-width: 700px) {
    width: calc(34rem - 14px);
  }
  &::-webkit-input-placeholder {
    font-size: 14px;
    color: black;
    letter-spacing: 2px;
    font-weight: bold;
    padding-left: 1rem;
`;

const ButtonStyles = styled.button`
  margin-top: 2rem;
  width: 14rem;
  height: 3rem;
  background: linear-gradient(
    30deg,
    rgba(117, 41, 73, 0.014) 2%,
    rgba(170, 46, 98, 0.5) 80%
  );
  box-shadow: none;
  border: none;
  color: white;
  margin-bottom: 2rem;
  letter-spacing: 2px;
  font-weight: bold;
  color: black;
  border-radius: 1rem;
`;

const Orb1Style = styled.div`
  position: absolute;
  top: 40vh;
  left: -10vw;
  height: 18vw;
  width: 18vw;
  padding: 4px;
  border-radius: 50%;
  z-index: -1;
  transform: translateZ(-10px);
  background: linear-gradient(
    30deg,
    rgba(117, 41, 73, 0.014) 2%,
    rgba(170, 46, 98, 0.5) 100%
  );
  animation-name: ${OrbAnimation};
  animation-duration: 7s;
  animation-iteration-count: infinite;
  animation-delay: 0s;
`;

const Orb2Style = styled.div`
  position: absolute;
  top: -40vh;
  left: -80vw;
  height: 12vw;
  width: 12vw;
  padding: 4px;
  border-radius: 50%;
  z-index: -1;
  transform: translateZ(-20px);
  background: linear-gradient(
    30deg,
    rgba(117, 41, 73, 0.014) 2%,
    rgba(170, 46, 98, 0.5) 100%
  );
  animation-name: ${OrbAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-delay: 1s;
`;

const Orb3Style = styled.div`
  position: absolute;
  top: 60vh;
  left: 40vw;
  height: 8vw;
  width: 8vw;
  padding: 4px;
  border-radius: 50%;
  z-index: -1;
  transform: translateZ(-15px);
  background: linear-gradient(
    30deg,
    rgba(117, 41, 73, 0.014) 2%,
    rgba(170, 46, 98, 0.5) 100%
  );
  animation-name: ${OrbAnimation};
  animation-duration: 9s;
  animation-iteration-count: infinite;
  animation-delay: 0.5s;
`;

const Orb4Style = styled.div`
  position: absolute;
  top: 88vh;
  right: -110vw;
  height: 8vw;
  width: 8vw;
  padding: 4px;
  border-radius: 50%;
  z-index: -1;
  transform: translateZ(-25px);
  background: linear-gradient(
    30deg,
    rgba(117, 41, 73, 0.014) 2%,
    rgba(170, 46, 98, 0.5) 100%
  );
  animation-name: ${OrbAnimation};
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-delay: 1.3s;
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
    if (data.message && data.email && data.name) {
      emailjs
        .sendForm(
          'service_gd3bfrb',
          'template_6dfv4nn',
          e.target,
          'user_hbc7uXk6VzJ9iJYYOUNTt'
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
    setData({ name: '', email: '', message: '' });
    document.getElementById('myForm').reset();
    alert('sent!');
  };

  return (
    <ContactStyles>
      <Orb1Style />
      <Orb2Style />
      <Orb4Style />
      <Orb3Style />
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
