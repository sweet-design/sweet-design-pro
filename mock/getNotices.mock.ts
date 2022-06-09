// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/notices': (req: Request, res: Response) => {
    res.status(200).send({
      data: [
        {
          id: 'b371D9EC-45fD-2c89-9Ff5-270AFCeFeFFd',
          extra: 'bWjITnE',
          key: 19,
          read: false,
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
          title: '却书根真步引期成西三支放使命是电头历。',
          status: 'processing',
          datetime: '2012-01-11',
          description: '五必一问见主转温交外运指却几直识。',
          type: 'notification',
        },
        {
          id: 'f2DF33d5-369b-Fa7D-30FD-42Cf8edb05e9',
          extra: '9d4DK',
          key: 20,
          read: false,
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
          title: '时事全么完车改难共使电常立。',
          status: 'processing',
          datetime: '1997-03-29',
          description: '毛产等习点小器正话争往海能。',
          type: 'notification',
        },
        {
          id: '0ADAae9f-724A-D2f8-AE0C-C3764A65Eb3b',
          extra: 'lCA^',
          key: 21,
          read: true,
          avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
          title: '原今速切角我得布了须光经区亲心约最还。',
          status: 'processing',
          datetime: '1983-04-24',
          description: '质场见断重干到共取集反传北但看子。',
          type: 'notification',
        },
        {
          id: '1fD64bC6-5786-dD91-CbbE-AEbcDbfEe82c',
          extra: 'nkIE%d',
          key: 22,
          read: false,
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
          title: '切能得公件力月头志知车包前层观结技。',
          status: 'error',
          datetime: '1973-08-03',
          description: '下造很与本小酸其海该这持安律究育。',
          type: 'notification',
        },
        {
          id: 'bD49ed8B-3Efc-A1e7-46Ee-Be9fd5D7cAE6',
          extra: 'j@gWx',
          key: 23,
          read: true,
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
          title: '志至是面下并并战展须织影观东。',
          status: 'default',
          datetime: '1985-08-18',
          description: '般花认内持头江变设还各性克方那容。',
          type: 'notification',
        },
        {
          id: 'e48Bbb05-4Fd9-DE4f-bF3C-d827eCF5f7ce',
          extra: 'dfYQ',
          key: 24,
          read: true,
          avatar: 'https://avatars1.githubusercontent.com/u/8186664?s=40&v=4',
          title: '美江级过消道布处作做飞率单党起划石。',
          status: 'warning',
          datetime: '1974-04-29',
          description: '过安流增而下集级采族为经高状热老直。',
          type: 'notification',
        },
      ],
      total: 99,
      success: false,
    });
  },
};