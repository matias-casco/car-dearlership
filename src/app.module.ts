import { Module } from '@nestjs/common';
import { CarsService } from './cars/cars.service';
import { CarsController } from './cars/cars.controller';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [CarsModule],
  controllers: [CarsController],
  providers: [CarsService],
})
export class AppModule {}
