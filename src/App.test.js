import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import BookingForm from './components/BookingForm';
import { initialState, formReducer } from './components/Main';

describe('Form dispatch', () => {
  afterEach(cleanup);

  it('should render the form', () => {
    const { getByLabelText, getByText } = render(<BookingForm reducer={formReducer} initialState={initialState} />);
    const dateInput = getByLabelText('Choose date');
    const timeInput = getByLabelText('Choose time');
    const guestsInput = getByLabelText('Number of guests');
    const occasionInput = getByLabelText('Occasion');
    const submitBtn = getByText('Book Now');

    expect(timeInput).toBeInTheDocument()
    expect(dateInput).toBeInTheDocument()
    expect(guestsInput).toBeInTheDocument()
    expect(occasionInput).toBeInTheDocument()
    expect(submitBtn).toBeInTheDocument()
  })

  it('should submit correctly as value provided', () => {
    const { getByLabelText, getByText } = render(<BookingForm reducer={formReducer} initialState={initialState} />);
    const dateInput = getByLabelText('Choose date');
    const timeInput = getByLabelText('Choose time');
    const guestsInput = getByLabelText('Number of guests');
    const occasionInput = getByLabelText('Occasion');
    const submitBtn = getByText('Book Now');

    fireEvent.change(dateInput, { target: { value: "01-25-2023" } })
    fireEvent.change(timeInput, { target: { value: "19:00" } })
    fireEvent.change(guestsInput, { target: { value: "1" } })
    fireEvent.change(occasionInput, { target: { value: "Anniversary" } })

    fireEvent.submit(submitBtn)

    const mockDispatch = jest.fn()

    formReducer(initialState, { type: "booking", payload: dateInput.value }, mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith({ type: "booking", payload: "01-25-2025" })


    // formReducer(initialState, {
    //   type: "booking",
    //   payload: {
    //     availableDate: dateInput.value,
    //     availableTime: timeInput.value,
    //     guests: guestsInput.value,
    //     occasion: occasionInput.value
    //   }
    // }, mockDispatch);
    // expect(mockDispatch).toHaveBeenCalledWith({
    //   type: "booking",
    //   payload: {
    //     availableDate: "01-25-2023",
    //     availableTime: "19:00",
    //     guests: "1",
    //     occasion: "Anniversary"
    //   }
    // })
  })
})
