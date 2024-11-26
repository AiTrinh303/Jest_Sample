import {render, screen, within} from '@testing-library/react';
import FormData from '../components/FormData';

const toContainRole = (container, role, quantity = 1) => {
    const elements = within(container).queryAllByRole(role);
    const pass = elements.length === quantity;
    return {
      pass,
      message: () =>
        pass
          ? `Expected container not to contain ${quantity} elements with role ${role}, but it did.`
          : `Expected container to contain ${quantity} elements with role ${role}, but found ${elements.length}.`,
    };
  };
  
  expect.extend({ toContainRole });

test('Form display Save and Cancel buttons', () => {
  render(<FormData />);
  const form = screen.getByRole('form');
//   const [saveButton, cancelButton] = within(form).getAllByRole('button');

//     expect(saveButton).toHaveTextContent('Save');
//     expect(cancelButton).toHaveTextContent('Cancel');

expect(form).toContainRole('button', 2)

});
