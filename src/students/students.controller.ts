import { Body, Controller, Get, Post, HttpStatus, Res } from '@nestjs/common';
import { Student } from 'schema/student.schema';
import { StudentsService } from 'src/students/students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}
  @Get()
  index(): string {
    return 'This action will return students';
  }

  @Post()
  async createStudent(@Res() response, @Body() student: Student) {
    const newStudent = await this.studentsService.create(student);
    return response.status(HttpStatus.CREATED).json({
      newStudent,
    });
  }
}
