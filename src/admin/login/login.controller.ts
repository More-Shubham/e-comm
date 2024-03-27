import { Body, Controller, Get, Post, Render } from '@nestjs/common';

@Controller()
export class LoginController {
	@Get()
	@Render('index')
	root() {
		return {};
	}

	@Post()
	@Render('index')
	onSubmit(@Body('email') email: string, @Body('password') password: string) {
		console.log(email, password);
		// TODO: validate user and password
		// If any error then send error message related to the login error

		// If successful then send to page name as {{process.env.HOME_PATH}}
		return {};
	}
}
