import {render, screen} from '@testing-library/react';
import ColorList from '../components/ColorList';



test('getBy, queryBy, findBy finding 0 elements', async () => {
    //getByRole! getByText
    //queryByRole! queryByText! queryByDisplayValue!
    //findByRole! findByText! findByDisplayValue!

    render(<ColorList />);

    //getByRole not found element
    expect(() => screen.getByRole('textbox')).toThrow();

    //queryByRole not found element
    expect(screen.queryByRole('textbox')).toEqual(null);

    //findByRole not found element
    let errorThrown =false;
    try{
        await screen.findByRole('textbox');        
    } catch(e){
        errorThrown = true;
    }
    expect(errorThrown).toEqual(true);
});

test('getBy, queryBy, findBy finding 1 element', async () => {
    render(<ColorList />);

    //getByRole found element
    expect(screen.getByRole('list')).toBeInTheDocument();

    //queryByRole found element
    expect(screen.queryByRole('list')).toBeInTheDocument();

    //findByRole found element
    expect(await screen.findByRole('list')).toBeInTheDocument();
});

test('getBy, queryBy, findBy finding > 1 elements', async () => {
    render(<ColorList />);

       //getByRole found more elements
       expect(() => screen.getByRole('listitem')).toThrow();

       //queryByRole found more elements
       expect(() => screen.queryByRole('listitem')).toThrow();
   
       //findByRole found more elements
       let errorThrown =false;
       try{
           await screen.findByRole('listitem');        
       } catch(e){
           errorThrown = true;
       }
       expect(errorThrown).toEqual(true);
});

test('getAllBy, queryAllBy, findAllBy', async() => {
    render(<ColorList />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    
    expect(screen.queryAllByRole('listitem')).toHaveLength(3);

    expect(await screen.findAllByRole('listitem')).toHaveLength(3);
});

test('favor using getBy to prove an element exists', () => {
    render(<ColorList />);

    const element = screen.getByRole('list');
    expect(element).toBeInTheDocument();

});

test('favor using queryBy to prove an element does not exist', () => {
    render(<ColorList />);

    const element = screen.queryByRole('textbox');
    expect(element).not.toBeInTheDocument();
});

test('favor using findBy to prove an element exists', async () => {
    render(<ColorList />);

    const element = await screen.findByRole('list');
    expect(element).toBeInTheDocument();
});