import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './common/config';
import { DatabaseModule } from './database/database.module';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    DatabaseModule,
    PokemonModule,
  ],
})
export class AppModule {}
