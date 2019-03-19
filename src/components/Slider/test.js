import React from 'react';
import renderer from 'react-test-renderer';

import Slider from '.';

test('Testar componente de Slider da aplicação', () => {

    const component = renderer.create(
      <Slider />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
