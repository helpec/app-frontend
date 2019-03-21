import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";
import BasePage from '.';

test('Testar base page BasePage', () => {

    const component = renderer.create(
        <BrowserRouter>
            <BasePage />
        </BrowserRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
