import {render, screen} from '@testing-library/react';
import {setupServer} from 'msw/node';
import {rest} from 'msw';
import {MemoryRouter} from 'react-router-dom';
import HomeRoute from './HomeRoute';


const handlers = [
    rest.get('/api/repositories', (req, res, ctx) => {
       const language = req.url.searchParams.get('q').split('language:')[1];
      
       return res(
        ctx.json({
            items:[
                {id: 1, full_name: `${language}_a`},
                {id: 2, full_name: `${language}_b`},
            ]
        })
       )
    })
]

const server = setupServer(...handlers);

beforeAll(() => {
    server.listen();
});


afterEach(() => {
    server.resetHandlers();
});


afterAll(() => {
    server.close();
});

test('renders two links for each language', async () => {
    render(
        <MemoryRouter>
            <HomeRoute />
        </MemoryRouter>
    );

    //Loop over each language
    //For each language, make sure we see two links
    //Assert that the links have the appropriate full_name and href

    const languages = [
        'javascript',
        'typescript',
        'rust',
        'go',
        'python',
        'ruby'
    ];

    for (const language of languages) {
        const links = await screen.findAllByRole('link', {
            name: new RegExp(`${language}_`)
        });

        expect(links).toHaveLength(2);
        // expect(links[0]).toHaveTextContent(`${language}_a`);
        // expect(links[0]).toHaveAttribute('href', `/repositories/${language}_a`);
        // expect(links[1]).toHaveTextContent(`${language}_b`);
        // expect(links[1]).toHaveAttribute('href', `/repositories/${language}_b`);
    }

});
