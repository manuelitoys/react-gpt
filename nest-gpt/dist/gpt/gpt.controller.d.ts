/// <reference types="multer" />
import { GptService } from './gpt.service';
import { AudioToTextDto, ImageGenerationDto, OrthographyDto, ProsConsDiscusserDto, TextToAudioDto, TranslateDto } from './dtos';
import type { Response } from 'express';
export declare class GptController {
    private readonly gptService;
    constructor(gptService: GptService);
    orthographyCheck(orthographyDto: OrthographyDto): Promise<any>;
    prosConsDicusser(proConsDiscuserDto: ProsConsDiscusserDto): Promise<import("openai/resources").ChatCompletionMessage>;
    prosConsDicusserStream(proConsDiscuserDto: ProsConsDiscusserDto, res: Response): Promise<void>;
    translateText(translateDto: TranslateDto): Promise<{
        message: string;
    }>;
    textToAudio(textToAudioDto: TextToAudioDto, res: Response): Promise<void>;
    textToAudioGetter(res: Response, fileId: string): Promise<void>;
    audioToText(file: Express.Multer.File, audioToTextDto: AudioToTextDto): Promise<import("openai/resources/audio/transcriptions").Transcription>;
    imageGeneration(imageGenerationDto: ImageGenerationDto): Promise<void>;
}
