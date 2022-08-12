import { Controller, Post, Get, Param, ParseIntPipe, Body, Patch, ParseUUIDPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

    constructor(private readonly cs: CarsService) {}
    
    @Get()
    getAllCars(){
        return this.cs.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe ) id: string) {
        return this.cs.findOneById(id);
    }

    @Post()
    createCar(@Body() body: CreateCarDto){
        return this.cs.create(body);
    }

    @Patch(':id')
    updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() body: UpdateCarDto){
        return this.cs.update(id, body);
    }

    @Patch(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string){
        return this.cs.delete(id);
    }
}
