import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";
import FalandoSobrePage from '.';

test('Testar pagina web FalandoSobrePage', () => {

    const component = renderer.create(
        <BrowserRouter>
            <FalandoSobrePage />
        </BrowserRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
