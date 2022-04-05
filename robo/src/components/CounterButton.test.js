import { shallow } from 'enzyme';

import CounterButton from "./CounterButton";

it('expect to render CounterButton component', () => {
    const mockProps = {
        color: 'red',
    }

    expect(shallow(<CounterButton { ...mockProps } />)).toMatchSnapshot();
});

it('correctly increments the counter', () => {
    const mockProps = {
        color: 'red',
    }
    const wrapper =  shallow(<CounterButton { ...mockProps } />);
    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 3 });
    expect(wrapper.props().color).toEqual('red');
});
