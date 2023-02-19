import {
  IsNotEmpty,
  IsString,
  IsArray,
  IsNumber,
  IsDate,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateOrderDto {
  @IsNumber()
  @IsNotEmpty()
  readonly customer: number;

  @IsNumber()
  @IsNotEmpty()
  readonly total: number;

  @IsString()
  @IsNotEmpty()
  readonly status: string;

  @IsDate()
  @IsNotEmpty()
  readonly date: Date;

  @IsArray()
  @IsNotEmpty()
  readonly products: string[];
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
