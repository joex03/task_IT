import { Repository } from 'typeorm';
import { user } from './User';
export declare class AppService {
    readonly userRepository: Repository<user>;
    constructor(userRepository: Repository<user>);
    createUser(name: string, age: number): Promise<string>;
    getAllUsers(): Promise<user[]>;
}
