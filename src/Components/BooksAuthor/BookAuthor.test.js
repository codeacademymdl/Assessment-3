import React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import BooksAuthor from './BooksAuthor.component';


const book = {
    "Name": "Harry Potter and the Sorcerers Stone (Harry Potter, #1)",
    "rating": "4.45",
    "imageSrc": "{`./cover_image.jpeg`}"
}
describe('BooksAuthor', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<BooksAuthor  />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});





