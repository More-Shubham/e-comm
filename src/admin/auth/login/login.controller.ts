import { Controller, Get, Post, Render } from '@nestjs/common';

@Controller()
export class LoginController {
	@Get()
	@Render('index')
	root() {
		return {};
	}

	@Post()
	@Render('index')
	onSubmit() {
		return {};
	}
}
