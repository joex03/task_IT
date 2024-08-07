"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const typeorm_1 = require("typeorm");
let user = class user {
};
exports.user = user;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], user.prototype, "Id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, default: 20 }),
    __metadata("design:type", Number)
], user.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'unsername', nullable: false, }),
    __metadata("design:type", String)
], user.prototype, "name", void 0);
exports.user = user = __decorate([
    (0, typeorm_1.Entity)()
], user);
//# sourceMappingURL=User.js.map