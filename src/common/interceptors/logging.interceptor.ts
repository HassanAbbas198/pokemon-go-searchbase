import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  Logger,
  CallHandler,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private logger: Logger, private configService: ConfigService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    if (this.configService.get('LOG_HEADERS')) {
      this.logger.log(`[Request headers]: ${JSON.stringify(request.headers)}`);
    }
    if (this.configService.get('LOG_REQUEST_DATA')) {
      this.logger.log(`[Request body]: ${JSON.stringify(request.body)}`);
    }
    return next.handle();
  }
}
