import { AppService } from './app.service';
import { user } from './User';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    sendinfo(id: number, age: number, name: string): Promise<string>;
    getUsers(): Promise<user[]>;
}
