import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { v4 as uuid } from 'uuid';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createAt: new Date().getTime(),
      updateAt: new Date().getTime()
    },
  ]

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLocaleLowerCase(),
      createAt: new Date().getTime(),
      updateAt: new Date().getTime()
    }
    this.brands.push(brand);
    return 'This action adds a new brand';
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id == id);
    if ( !brand ) throw new NotFoundException(`Brand with id: #${id} not found`)
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let bradDB = this.findOne(id);

    this.brands = this.brands.map(x => {
      if (x.id === id) {
        bradDB.updateAt = new Date().getTime();
        bradDB = {...bradDB, ...updateBrandDto}
        return bradDB
      }
    })
    return this.brands;
  }

  remove(id: string) {
    this.brands = this.brands.filter(x => x.id !== id);
    return this.brands;
  }

  fillDataSeedBrands(brands: Brand[]) {
    this.brands = brands;
  }
}
