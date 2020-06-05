import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from './ContactForm';

// test('title of test', () => {// do something})
//test to see if contact form renders
test('ContactForm renders without crashing', () => {
  render(<ContactForm />);
})

//Check to see if COntact Form has everything