import React from 'react';
import renderer from 'react-test-renderer';

import InputForm from '.';

test('Testar componente de InputForm da aplicação', () => {

    const component = renderer.create(
      <InputForm />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
