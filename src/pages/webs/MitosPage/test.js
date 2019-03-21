import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";
import MitosPage from '.';

test('Testar pagina web MitosPage', () => {

    const component = renderer.create(
        <BrowserRouter>
            <MitosPage />
        </BrowserRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
