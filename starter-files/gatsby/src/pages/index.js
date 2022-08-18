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

const PROJECTIMAGES = [
  'https://res.cloudinary.com/dbnapmpvm/image/upload/v1644352375/Portfolio/AFEB3746-1A8E-4A7D-A411-2D5A8364F353_w33kli.jpg',
  'https://res.cloudinary.com/dbnapmpvm/image/upload/v1644349964/Portfolio/BBF1A966-F0A9-41FF-9122-29B43C58841B_1_105_c_sdq7ou.jpg',
  'https://res.cloudinary.com/dbnapmpvm/image/upload/v1658358079/Portfolio/Screen_Shot_2022-02-08_at_1.11.10_PM_nzcxfs.png',
  'https://res.cloudinary.com/dbnapmpvm/image/upload/v1658358075/Portfolio/Image_7-20-22_at_6.47_PM_wyf7s3.jpg',
];

export default function HomePage({ data, ...props }) {
  console.log(data);
  return (
    <HomeStyles>
      <Head />
      <Technology />
      <ProjectIntro projects={data.projects.nodes.reverse()} />
      {data.projects.nodes.reverse().map((project, index) => (
        <Project
          image={PROJECTIMAGES[index]}
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
