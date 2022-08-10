import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './students/students.module';
import { Student, StudentSchema } from '../schema/student.schema';
import { StudentsService } from '../src/students/students.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    StudentsModule,
  ],
  controllers: [AppController],
  providers: [AppService, StudentsService],
})
export class AppModule {}
