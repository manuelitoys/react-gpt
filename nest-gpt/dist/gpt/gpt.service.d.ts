import { OrthographyDto } from './dtos';
export declare class GptService {
    private openai;
    orthographyCheck(orthographyDto: OrthographyDto): Promise<any>;
}
