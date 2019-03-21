import React from 'react';
import { BrowserRouter } from "react-router-dom";
import renderer from 'react-test-renderer';

import SocorrosPage from '.';

test('Testar pagina web SocorrosPage', () => {

    const component = renderer.create(
        <BrowserRouter>
            <SocorrosPage />
        </BrowserRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
