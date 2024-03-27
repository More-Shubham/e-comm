import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { LoginModule } from './auth/login/login.module';

@Module({
	controllers: [AdminController],
	providers: [AdminService],
	imports: [LoginModule],
})
export class AdminModule {}
