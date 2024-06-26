import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ 
    ConfigModule.forRoot(), 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      autoLoadEntities: true,
      synchronize: true
    })
  ],
})
export class AppModule {}
