import OpenAI from 'openai';
import { OrthographyDto, ProsConsDiscusserDto, TextToAudioDto, TranslateDto } from './dtos';
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
}
