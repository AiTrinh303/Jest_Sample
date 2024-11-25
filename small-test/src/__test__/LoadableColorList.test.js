import {render, screen} from '@testing-library/react';
import LoadableColorList from '../components/LoadableColorList';

test('Favor findBy or findAllBy when data fetching', async () => {
    render(<LoadableColorList />);

    const elements = await screen.findAllByRole('listitem');

    expect(elements).toHaveLength(3);
});



