import { car } from './../../cars/interfaces/car.interface'
import { v4 as uuid } from 'uuid';

export const CARS_SEED: car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'AS'
    },{
        id: uuid(),
        brand: 'Jeep',
        model: 'ASD'
    }, {
        id: uuid(),
        brand: 'Corolla',
        model: 'DFGDG'
    }
]