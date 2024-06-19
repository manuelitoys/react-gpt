"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GptService = void 0;
const common_1 = require("@nestjs/common");
const use_cases_1 = require("./use-cases");
const openai_1 = require("openai");
let GptService = class GptService {
    constructor() {
        this.openai = new openai_1.default({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }
    async orthographyCheck(orthographyDto) {
        return await (0, use_cases_1.orthographyCheckUseCase)(this.openai, {
            prompt: orthographyDto.prompt
        });
    }
};
exports.GptService = GptService;
exports.GptService = GptService = __decorate([
    (0, common_1.Injectable)()
], GptService);
//# sourceMappingURL=gpt.service.js.map