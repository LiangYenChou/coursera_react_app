import { render, screen } from '@testing-library/react';

import BookingForm from './components/BookingForm';



test('Render the BookingForm heading', ()=>{
  render(<BookingForm/>);
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
})