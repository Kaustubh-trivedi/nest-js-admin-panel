import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import session from 'express-session';
import { NestExpressApplication } from '@nestjs/platform-express';
import expressLayouts from 'express-ejs-layouts';
import { authRedirectMiddleware } from 'middleware/auth-redirect.middleware';
import { layoutMiddleware } from 'middleware/layout.middleware';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.use(
    session({
      secret: 'keyboard-cat',
      resave: false,
      saveUninitialized: false,
    }),
  );

  // app.use(authRedirectMiddleware);
  // app.use(layoutMiddleware);
  app.use(expressLayouts);


  app.set('layout', 'index'); // default layout
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
