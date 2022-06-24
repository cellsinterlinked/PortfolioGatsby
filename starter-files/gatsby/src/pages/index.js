import React from 'react';
import { graphql } from 'gatsby';
import 'normalize.css';
import styled from 'styled-components';
import Technology from './Technology';
import Head from './Head';
import Project from './Project';
import ProjectIntro from './ProjectIntro';
import '../assets/fonts/Cleon-Light.ttf';
import Contact from './Contact';

const HomeStyles = styled.section`
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 10px;
  scroll-snap-type: y mandatory;
`;

export default function HomePage({ data, ...props }) {
  console.log(data);
  return (
    <HomeStyles>
      <Head />
      <Technology />
      <ProjectIntro projects={data.projects.nodes.reverse()} />
      {data.projects.nodes.reverse().map((project, index) => (
        <Project
          title={project.name.toUpperCase()}
          key={project.name}
          description={project.description}
          features={project.features}
          technologies={project.technologies}
        />
      ))}
      <Contact />
    </HomeStyles>
  );
}

export const query = graphql`
  query TechQuery {
    projects: allSanityProject {
      nodes {
        name
        description
        technologies {
          name
          image {
            asset {
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        features {
          feature
        }
        leftimage {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
