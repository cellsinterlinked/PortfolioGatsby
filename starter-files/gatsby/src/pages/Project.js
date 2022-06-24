import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import './Page.css';
import ProjectRight from '../components/ProjectRight';
import ProjectLeft from '../components/ProjectLeft';
import ProjectCenter from '../components/ProjectCenter';

const ProjectStyles = styled.section`
  scroll-behavior: smooth;
  height: 100vh;
  width: 100vw;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: flex-start;
  align-items: center;
  overflow-y: hidden;
  scroll-snap-align: start;
  transform-style: preserve-3d;
  z-index: -1;
  transition: 500ms;
`;

export default function Project({
  title,
  video,
  description,
  liveLink,
  codeLink,
  technologies,
  features,
}) {
  const ref = useRef();

  useEffect(() => {
    ref.current.scrollLeft += 2000;
  }, []);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    console.log('triggering', scrollOffset);
  };

  return (
    <ProjectStyles ref={ref}>
      <ProjectLeft
        features={features}
        technologies={technologies}
        scroll={scroll}
      />
      <ProjectCenter video={video} title={title} scroll={scroll} />
      <ProjectRight
        description={description}
        codeLink={codeLink}
        liveLink={liveLink}
        scroll={scroll}
      />
    </ProjectStyles>
  );
}
