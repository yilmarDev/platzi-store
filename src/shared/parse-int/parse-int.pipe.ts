import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const validatedValue = parseInt(value, 10);

    if (isNaN(validatedValue)) {
      throw new BadRequestException(`${value} is not an integer`);
    }

    return validatedValue;
  }
}
