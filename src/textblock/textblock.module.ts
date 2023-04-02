import { Module } from '@nestjs/common';
import { TextblockController } from './textblock.controller';
import { TextBlockService } from './textblock.service';
import { Block } from './textblocks.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { FilesModule } from 'src/files/files.module';

@Module({
  controllers: [TextblockController],
  providers: [TextBlockService],
  imports: [
    SequelizeModule.forFeature([Block]),
    AuthModule,
    FilesModule,
  ],
  exports: [
    TextBlockService,
  ]
})

export class TextblockModule {}
