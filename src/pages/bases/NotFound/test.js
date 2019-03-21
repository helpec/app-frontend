import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";
import NotFound from '.';

test('Testar page NotFound', () => {

    const component = renderer.create(
        <BrowserRouter>
            <NotFound />
        </BrowserRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
