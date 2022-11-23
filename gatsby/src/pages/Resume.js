import React from 'react';
import styled from 'styled-components';

const ResumeContainerStyle = styled.div`
  position: absolute;
  z-index: 200;
  padding-top: 7rem;
  background: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 100%;
  align-items: center;
  justify-content: flex-start;
`;

const ResumeImageStyle = styled.img`
  width: 95%;
  max-width: 1000px;
  height: auto;
  box-shadow: 3px 3px 10px grey, -3px -3px 10px grey;
  margin-bottom: 2rem;
`;

export default function Resume() {
  return (
    <ResumeContainerStyle>
      <ResumeImageStyle
        alt=""
        src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1669244856/Portfolio/Resume_final_lzxidt.jpg"
      />
      <ResumeImageStyle
        alt=""
        src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1667326903/Portfolio/Resume2_x0mt7q.png"
      />
    </ResumeContainerStyle>
  );
}
