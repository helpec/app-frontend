import React from 'react';
import { BrowserRouter } from "react-router-dom";
import renderer from 'react-test-renderer';

import Footer from '.';

test('Testar componente de Footer da aplicação', () => {

    const component = renderer.create(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
