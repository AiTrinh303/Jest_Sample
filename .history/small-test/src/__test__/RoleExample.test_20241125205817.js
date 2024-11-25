import {render, screen} from '@testing-library/react';
import RoleExample from '../components/RoleExample';

test('RoleExample renders all elements', () => {
    render(<RoleExample />);

    const link = screen.getByRole('link', {name: /link/i});
    const button = screen.getByRole('button', {name: /button/i});
    const footer = screen.getByRole('contentinfo', {name: /footer/i});
    const heading1 = screen.getByRole('heading', {name: /heading 1/i});
    const header = screen.getByRole('banner', {name: /header/i});
    const img = screen.getByRole('img', {name: /image/i});
    const checkbox = screen.getByRole('checkbox', {name: /checkbox/i});
    const spin = screen.getByRole('spinbutton', {name: /spinbutton/i});
    const radio = screen.getByRole('radio', {name: /radio/i});
    const textbox = screen.getByRole('textbox', {name: /textbox/i});
    const listItem = screen.getByRole('listitem', {name: /list item/i});
    const listGroup = screen.getByRole('list', {name: /list group/i});

    expect(link).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(heading1).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(spinbutton).toBeInTheDocument();
    expect(radio).toBeInTheDocument();
    expect(textbox).toBeInTheDocument();
    expect(listItem).toBeInTheDocument();
    expect(listGroup).toBeInTheDocument();
    });
