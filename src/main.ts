import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { client } from '@vigilio/express-core/client';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(client({ file: 'ts/index.ts' }));
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'resources', 'views'));
  app.setViewEngine('pug'); // you can use pug,ejs ,etc

  await app.listen(4000);
}
bootstrap();
