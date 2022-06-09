// @ts-ignore
import { Request, Response } from 'express';

export default {
  'PUT /api/rule': (req: Request, res: Response) => {
    res.status(200).send({
      key: 100,
      disabled: false,
      href: 'https://ant.design',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      name: '石军',
      owner: 'Walker',
      desc: '府干县就记听华或约存己力用。',
      callNo: 80,
      status: 68,
      updatedAt: 'A#zwX',
      createdAt: 'jF0Ac',
      progress: 87,
    });
  },
};
