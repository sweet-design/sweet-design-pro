// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/rule': (req: Request, res: Response) => {
    res.status(200).send({
      key: 99,
      disabled: true,
      href: 'https://umijs.org/',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      name: '宋军',
      owner: 'Jones',
      desc: '气清据调半二展候别员回国。',
      callNo: 81,
      status: 90,
      updatedAt: 'QS0$YX',
      createdAt: 'lt(',
      progress: 71,
    });
  },
};
