import React from 'react';
import { BrowserRouter } from "react-router-dom";
import renderer from 'react-test-renderer';

import HomePage from '.';

test('Testar pagina web HomePage', () => {

    const component = renderer.create(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
