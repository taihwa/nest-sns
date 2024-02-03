import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * author: string;
 * title: string;
 * constent: string;
 * images: string[];
 * likeCount: number;
 * commentCount: number;
 */

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
