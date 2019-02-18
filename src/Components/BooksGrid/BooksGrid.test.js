import React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import BooksGrid from './BooksGrid.component'

describe('BooksGrid', () => {
    it('renders correctly', () => {
        const tree = renderer
          .create(<BooksGrid author="J K Rowling"
           key="1" 
           book={
               [{
            "Name": "Harry Potter and the Sorcerers Stone (Harry Potter, #1)",
            "rating": "4.45",
            "imageSrc": "{`./cover_image.jpeg`}"
        }]
    }/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
});

