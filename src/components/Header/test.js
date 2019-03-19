import React from 'react';
import { BrowserRouter } from "react-router-dom";
import renderer from 'react-test-renderer';

import Header from '.';

test('Testar componente de Header da aplicação', () => {

    const component = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
