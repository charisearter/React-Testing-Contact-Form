import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

// test('title of test', () => {// do something})
//test to see if contact form renders
test('ContactForm renders without crashing', () => {
  render(<ContactForm />);
})

//Check to see if labels are correct
test('if user can type in input fields', () => {
  //Arrange - render where I want to check and set up variables of what I want checked
  const { getByText, findAllByText , getByPlaceholderText } = render(<ContactForm />);
 
  //query by form inputs
  const firstNameInput = getByPlaceholderText(/edd/i);
  const lastNameInput = getByPlaceholderText(/burke/i);
  const emailInput = getByPlaceholderText(/bluebill1049@hotmail.com/i);
  

  //Act - check to see user can type
  //fireEvent to type in inputs
//firEven.change(variable from query inputs)
  fireEvent.change(firstNameInput, {
    //target name: 'inputNameofField', value: 'whatever' 
    //changed maxLenght to minLength:3
    target: { name: 'firstName', value: 'Bennder' }
  });

  fireEvent.change(lastNameInput, {
    target: { name: 'lastName', value: 'Tennington' }
  });
  // moved placeholder from label to input area to pass
  fireEvent.change(emailInput, {
    target: { name: 'email', value: "benn@ten.com" }
  });

  //Assert - what I expect to happen
  //did expect(variableName).not.toBeValid for test purposes
  expect(firstNameInput).toBeValid();
  expect(lastNameInput).toBeValid();
  expect(emailInput).toBeValid();
})
