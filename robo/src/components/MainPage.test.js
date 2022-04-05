import { shallow } from 'enzyme';

import MainPage from "./MainPage";
import React from "react";

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false,
    };
    wrapper = shallow(<MainPage {...mockProps} />)
});

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'john',
        isPending: false,
    };
    const wrapper2 = shallow(<MainPage {...mockProps} />)
    expect(wrapper.instance().filteredRobots()).toEqual([]);
    expect(wrapper2.instance().filteredRobots()).toEqual([{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
    }]);
});

it('isPending working correctly', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'john',
        isPending: true,
    };
    const wrapper2 = shallow(<MainPage {...mockProps} />)
    expect(wrapper2.contains(<h1>Loading</h1>)).toEqual(true);
});
