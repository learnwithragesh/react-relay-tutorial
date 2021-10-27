/**
 * @jest-environment jsdom
 */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Fetch from './index';

configure({adapter: new Adapter()});

const fetch = shallow(
    <Fetch />,
);

test('Total 1 Div', () => {
    expect(fetch.find('div')).toHaveLength(1);
});