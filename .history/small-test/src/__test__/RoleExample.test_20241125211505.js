import {render, screen} from '@testing-library/react';
import RoleExample from '../components/RoleExample';

test('RoleExample renders all elements', () => {
    render(<RoleExample />);

    const roles = [
        'link',
        'button',
        'contentinfo',
        'heading',
        'banner',
        'img',
        'checkbox',
        'spinbutton',
        'ratio',
        'textbox',
        ''
    ]
})