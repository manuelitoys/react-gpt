import type { AudioToTextResponse } from "../../interfaces";

export const audioToTextUseCase = async ( audioFile: File, prompt?: string ) => {
    try {

        const formData = new FormData();
        formData.append('file', audioFile);
        if( prompt ) formData.append('prompt', prompt); 
        
        const resp = await fetch(`${ import.meta.env.VITE_GPT_API }/audio-to-text`, {
            method: 'POST',
            body: formData
        });

        if( !resp.ok ) throw new Error('No se pudo realizar la transcripcion');

        return await resp.json() as AudioToTextResponse;
        

    } catch (error) {
        return null;
    }
}