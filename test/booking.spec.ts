import 'reflect-metadata';
import {container} from 'tsyringe';
import {HotelService} from '../src/hotel.service';

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
    const instance = container.resolve(HotelService);

});
