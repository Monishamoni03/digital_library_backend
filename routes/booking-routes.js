import { Router } from 'express';
import BookingController from '../controllers/bookings-controller';

const router = Router();
const booking = new BookingController();

router.get('/', booking.viewAllBookings);     //all bookings
router.get('/:id', booking.viewUserBookings); //user booking

export default router;