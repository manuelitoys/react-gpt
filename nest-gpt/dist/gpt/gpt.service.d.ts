/// <reference types="multer" />
import OpenAI from 'openai';
import { AudioToTextDto, ImageGenerationDto, OrthographyDto, ProsConsDiscusserDto, TextToAudioDto, TranslateDto } from './dtos';
export declare class GptService {
    private openai;
    orthographyCheck(orthographyDto: OrthographyDto): Promise<any>;
    prosConsDicusser({ prompt }: ProsConsDiscusserDto): Promise<OpenAI.Chat.Completions.ChatCompletionMessage>;
    prosConsDicusserStream({ prompt }: ProsConsDiscusserDto): Promise<import("openai/streaming").Stream<OpenAI.Chat.Completions.ChatCompletionChunk>>;
    translateText({ prompt, lang }: TranslateDto): Promise<{
        message: string;
    }>;
    textToAudio({ prompt, voice }: TextToAudioDto): Promise<string>;
    textToAudioGetter(fileId: string): Promise<string>;
    audioToText(audioFile: Express.Multer.File, audioToTextDto?: AudioToTextDto): Promise<OpenAI.Audio.Transcriptions.Transcription>;
    imageGeneration(imageGenerationDto: ImageGenerationDto): Promise<void>;
}
