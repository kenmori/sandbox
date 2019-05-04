import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import ReactDOM from 'react-dom';
import About from './About';
import TestApp from '../__test__/App';
import { AUTHERS } from 'react-apollo/test-utils';


test('test', async () => {
const component = mount(
<TestApp mocks={AUTHERS} addTypename={false}>
    <About />
</TestApp>
)
await wait(0);
expect(component.find('div').length.toBe(1))
})
