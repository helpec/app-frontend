import React from 'react';
import renderer from 'react-test-renderer';

import HeadLine from '.';

test('Testar componente de HeadLine da aplicação', () => {

    const component = renderer.create(
        <HeadLine title="Teste componente"/>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
