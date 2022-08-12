import { IsString, MinLength } from "class-validator";

export class CreateCarDto {

    @IsString({message: 'The brand must be string'})
    public brand: string;

    @IsString()
    public model: string;
}