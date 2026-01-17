import { Request, Response } from 'express';

export const processTextToAI = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    console.log('this is running');

    return res.json({
      message: 'process text to Ai is working very fine',
    });
  } catch (err) {
    return res.status(500).json({
      message: 'this has failed to process text to Ai',
    });
  }
};
