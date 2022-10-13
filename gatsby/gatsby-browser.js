import React from 'react';
import Layout from './src/components/Layout';
import Nav from './src/components/Nav';

export function wrapPageElement({ element, props }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <Layout {...props}>
      {/* <Nav /> */}
      {element}
    </Layout>
  );
}
