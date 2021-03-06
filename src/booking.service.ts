import {Booking} from './model/booking';

export class BookingService {

	// Collaborators (?)

	book(employeeId: unknown, hotelId: unknown, roomType: unknown, checkIn: Date, checkOut: Date): Booking {
		return undefined;
	}

}

// Booking should contain a unique ID, employeeId, hotelId, roomType, checkIn and checkOut.
// Check out date must be at least one day after the check in date.
// Validate if the hotel exists and room type is provided by the hotel
// Verify if booking is allowed according to the booking policies defined, if any. See Booking Policy Service for more details.
// Booking should only be allowed if there is at least one room type available during the whole booking period.
// Keep track of all bookings. E.g. If hotel has 5 standard rooms, we should have no more than 5 bookings in the same day.
// Hotel rooms can be booked many times as long as there are no conflicts with the dates.
// Return booking confirmation to the employee or error otherwise (exceptions can also be used).
