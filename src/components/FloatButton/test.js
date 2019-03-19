import React from 'react';
import renderer from 'react-test-renderer';

import FloatButton from '.';

test('Testar componente de FloatButton da aplicação', () => {

    const component = renderer.create(
      <FloatButton />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
