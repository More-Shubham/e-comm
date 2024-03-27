import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

// import * as csurf from 'csurf';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	app.useStaticAssets(join(__dirname, '..', 'public'));
	app.setBaseViewsDir(join(__dirname, '..', 'views'));
	app.setViewEngine('hbs');

	app.use(cookieParser());
	app.use(compression());
	// app.use(csurf());

	await app.listen(3000);
}
bootstrap();
