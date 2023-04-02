import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class CreateBlockDto {
    @ApiProperty({example: 'main-hero-text', description: 'Уникальное название для поиска'})
    //@IsString({message: 'Значение должно быть строкой'})
    name: string;
    
    @ApiProperty({example: 'Это заголовок', description: 'Заголовок блока'})
    //@IsString({message: 'Значение должно быть строкой'})
    title: string;
    
    @ApiProperty({example: 'Некоторый текст в блоке...', description: 'Текст в блоке'})
   // @IsString({message: 'Значение должно быть строкой'})
    content: string;

    @ApiProperty({example: '/Somedir/image.png', description: 'Изображение'})
    image: string;

    @ApiProperty({example: 'main-page', description: 'Название группы'})
    //@IsString({message: 'Значение должно быть строкой'})
    group: string;
}