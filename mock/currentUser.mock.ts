// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/currentUser': (req: Request, res: Response) => {
    console.log('获取数据哈');
    res.status(200).send({
      name: '郝明',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      userid: '199c7dEc-fA43-a7C0-f34D-cc1b89CAf9De',
      email: 'b.fvdbzw@mmltk.tj',
      signature: '什需儿压支共果委强北圆研六矿由。',
      title: '根议式品变联示须资置活业林教你非。',
      group: '服务技术部',
      tags: [
        { key: 1, label: '程序员' },
        { key: 2, label: '小清新' },
        { key: 3, label: '傻白甜' },
        { key: 4, label: '名望程序员' },
        { key: 5, label: '阳光少年' },
        { key: 6, label: '专注设计' },
        { key: 7, label: '名望程序员' },
        { key: 8, label: '小清新' },
        { key: 9, label: '' },
        { key: 10, label: '健身达人' },
        { key: 11, label: 'IT 互联网' },
        { key: 12, label: '名望程序员' },
        { key: 13, label: '名望程序员' },
        { key: 14, label: '程序员' },
        { key: 15, label: '海纳百川' },
      ],
      notifyCount: 64,
      unreadCount: 63,
      country: '英国',
      access: '起石美志给次联力得后亲住。',
      geographic: {
        province: { label: '台湾', key: 16 },
        city: { label: '甘孜藏族自治州', key: 17 },
      },
      address: '上海 上海市 浦东新区',
      phone: '11174781232',
    });
  },
};
