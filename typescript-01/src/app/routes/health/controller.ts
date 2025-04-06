import type { Request, Response } from 'express';

class HealthController {
  public handleHeathCheck(req: Request, res: Response) {
    return res.json({
      status: 'healthy',
    });
  }
}

export default HealthController;
