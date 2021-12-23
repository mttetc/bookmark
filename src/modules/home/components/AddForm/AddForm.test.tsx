import { mount } from 'enzyme';
import { AddForm } from './AddForm';

describe('SomeComponent', () => {
  it('validates model on button click', () => {
    const onSubmit = jest.fn();
    const onChange = jest.fn();
    const wrapper = mount(
      <AddForm onSubmit={onSubmit} onChange={onChange} error="api" inputSearch='' />
    );
    const instance = wrapper.instance();
    const submitBtn = wrapper.find('button')
    submitBtn.simulate('click')
    expect(onSubmit).toHaveBeenCalled();
  });
})