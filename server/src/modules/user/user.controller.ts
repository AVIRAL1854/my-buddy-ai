import { Request, Response } from 'express';

export const loginUser = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    console.log('this is running login User');

    return res.status(200).json({
      success: true,
      message: 'login successfully',
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'failed to login',
    });
  }
};
