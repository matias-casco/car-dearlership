import { IsString, MinLength } from "class-validator";

export class CreateCarDto {
  
  @IsString()
  @MinLength(3)
  brand: string;
  
  @IsString()
  @MinLength(3)
  model: string;
}