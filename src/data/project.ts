import { IPreviewProject } from '@/interface';
import { v4 as uuidv4 } from 'uuid';

const projects = [
    {
        thumnail: 'Fullstack',
        data: [
            {
                id: '7l3BCxfQlrGa8k2fRZn1',
                title: 'Website cứu trợ động vật kết hợp với bán hàng và mạng xã hội',
                image: 'https://ik.imagekit.io/egcqy8xob/data/1.jpg?updatedAt=1709027130603',
            },
            {
                id: '7spX87TVe9GGkpgg4rIf',
                title: 'Website cho thuê trọ ( clone từ  https://phongtro123.com )',
                image: 'https://ik.imagekit.io/egcqy8xob/data/5preview?updatedAt=1709028053059',
            },
            {
                id: '7NRSaFjWGIopiwUjmH5Y',
                title: 'Website mạng xã hội giống facebook',
                image: 'https://ik.imagekit.io/egcqy8xob/data/3.jpg?updatedAt=1709027130524',
            },
        ] as IPreviewProject[],
    },
    {
        thumnail: 'Front-end',
        data: [
            {
                id: 'IjveapiHLX3HBx8Nu0yM',
                title: 'Website xem video ngắn ( clone từ https://www.tiktok.com )',
                image: 'https://ik.imagekit.io/egcqy8xob/data/4.jpg?updatedAt=1709027130476',
            },
            {
                id: 'ddcTaZhL0ED8UvU82a2C',
                title: 'Website nghe nhạc trực tuyến ( clone từ https://zingmp3.vn )',
                image: 'https://ik.imagekit.io/egcqy8xob/data/5preview?updatedAt=1709028053059',
            },
            {
                id: 'YUMhueY03Kib06vi09Ly',
                title: 'Website portfolio về bản thân',
                image: 'https://ik.imagekit.io/egcqy8xob/data/6.png?updatedAt=1709027130538',
            },
        ] as IPreviewProject[],
    },
];

export default projects;
