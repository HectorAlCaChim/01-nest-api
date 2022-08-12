import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRANDS_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';

@Injectable()
export class SeedService {

  constructor(private carsService: CarsService,
    private brandService: BrandsService) {}

  populateDB() {
    this.carsService.fillDataSeedCars(CARS_SEED);
    this.brandService.fillDataSeedBrands(BRANDS_SEED);
    return `This action returns all seed`;
  }
}
