import React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Books from './Books.component'

const book = {
    "Name": "Harry Potter and the Sorcerers Stone (Harry Potter, #1)",
    "rating": "4.45",
    "imageSrc": "{`./cover_image.jpeg`}"
}
describe('Books', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Books />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});



describe('Book likeDislike', () => {
    it('checks if state of islike is changed ', () => {
        const wrapper = shallow(<Books
            Name="Harry Potter and the Sorcerers Stone (Harry Potter, #1)"
            rating="4.45"
            imageSrc= "{`./cover_image.jpeg`}"

            />)
        expect(wrapper.instance().state.isLike).toEqual(true);
        wrapper.instance().likeDislike();
        expect(wrapper.instance().state.isLike).toEqual(!true);

    });

});


