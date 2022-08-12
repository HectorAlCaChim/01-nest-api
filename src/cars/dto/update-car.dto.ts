import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto {

    @IsUUID()
    @IsString()
    @IsOptional()
    public id?: string;

    @IsString({message: 'The brand must be string'})
    @IsOptional()
    public brand?: string;

    @IsString()
    @IsOptional()
    public model?: string;
}