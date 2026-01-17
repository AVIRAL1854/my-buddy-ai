import { AssemblyAI } from "assemblyai";

const assemblyApiKey = String(process.env.ASSEMBLY_API_KEY_STT);

const client = new AssemblyAI({
  apiKey: assemblyApiKey,
});

const audioFile = "./local_file.mp3";

const params = {
  audio: audioFile,
  speech_models: ["universal"],
};

const ConvertSTT = async () => {
  const transcript = await client.transcripts.transcribe(params);

  console.log(transcript.text);
  return transcript;
};

export default ConvertSTT;
