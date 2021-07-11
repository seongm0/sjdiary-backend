import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserSetting } from './entity/user-setting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserSetting])],
  exports: [TypeOrmModule],
})
export class UserSettingModule {}