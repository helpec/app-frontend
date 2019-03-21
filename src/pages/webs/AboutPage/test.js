import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";
import AboutPage from '.';

test('Testar pagina web AboutPage', () => {
    const component = renderer.create(
        <BrowserRouter>
            <AboutPage />
        </BrowserRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
