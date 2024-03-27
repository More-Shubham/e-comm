import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

@Module({
	controllers: [AdminController],
	providers: [AdminService],
	imports: [LoginModule, RegisterModule],
})
export class AdminModule {}
