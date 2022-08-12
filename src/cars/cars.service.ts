import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
    private cars: car[] = [ {
        id: uuid(),
        brand: 'Toyota',
        model: ''
    },{
        id: uuid(),
        brand: 'Jeep',
        model: ''
    }, {
        id: uuid(),
        brand: 'Corolla',
        model: ''
    }]

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {
        return this.cars.find(x => x.id == id);
    }

    create(createCarDto: CreateCarDto) {
        const car: car = {
            id: uuid(),
            ...createCarDto
        }
        this.cars.push(car);
        return this.cars;
    }
    update(id: string, updateCarDto: UpdateCarDto) {
        let cardb = this.findOneById(id);
        this.cars.map(x => {
            if(x.id == id) {
                cardb = {
                    ...cardb,
                    ...updateCarDto,
                    id
                }
                return;
            } 
        });
        return cardb;
    }
    delete(id: string) {
        let cardb = this.findOneById(id);
        this.cars = this.cars.filter(x => x.id !== id);

        return this.cars;
    }

    fillDataSeedCars(cars: car[]) {
        this.cars = cars;
    }
}
