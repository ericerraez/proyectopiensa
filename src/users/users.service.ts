import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
constructor(private prisma: PrismaService){}

  create(createUserDto: CreateUserDto) {
    //return 'This action adds a new user';
    return this.prisma.pienssa.create({data:createUserDto});
  }

  findAll() {
    try {
      return this.prisma.pienssa.findMany()
    } catch (error) {
      console.log(error)
    }
  }
  findOne(id: number) {
    return this.prisma.pienssa.findUnique({where:{id}});
  }

  update(id: number, UpdateUserDto: UpdateUserDto) {
    return this.prisma.pienssa.update({
      where: { id},
      data: UpdateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.pienssa
    .delete({where: {id}});
  }
}
