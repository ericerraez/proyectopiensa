import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
@ApiProperty ()
name:string;

@ApiProperty()
lastname: string;

@ApiProperty()
mail:string;





}
