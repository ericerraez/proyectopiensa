import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config =new DocumentBuilder()
  .setTitle ('Median')
  .setDescription ('The median API description')
  .setVersion('0.1')
  .build();

  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api', app,document);
<<<<<<< HEAD
  await app.listen(process.env.PORT || 3000);}
bootstrap();
=======
await app.listen(process.env.PORT || 3000);}
bootstrap();
>>>>>>> 94fda7c2765df0de1f89a96793e9b9453a67859e
