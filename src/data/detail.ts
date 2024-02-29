import { IProject } from '@/interface';
import projects from './project';

const detail = [
    {
        ...projects[1].data[2],
        content: `Hiện nay động vật ngày càng trở nên quan trong với con người,  chúng dường như đã trở thành thành viên của một gia đình. Tuy nhiên rất nhiều động vật cụ thể  là chó mèo ta thường không được quý trọng dẫn đến việc chúng bị bỏ rơi không ai quan tâm. Để hạng chế việc đó Petfoster ra đời để phần nào giải quyết được vấn  đề chó mèo bị bỏ rơi. Trao cho chúng một gia đình ấm áp, để có thể cho chúng một ngôi nhà để trở về. Để duy trình hoạt động website sử dụng doanh thu từ việc bán hàng và trao đổi thông tin cũng như cũng cấp các kiến thức về cách nuôi dưỡng cũng như chia sẽ những khoản khắc vui vẽ bên boss của mình thông qua mạng xã hội của website`,
        funtion: {
            client: [
                'Quản lí hồ sơ và trang cá nhân',
                'Nhận nuôi thú cưng',
                'Yêu thích thú cưng',
                'Mua thức ăn cho thú cưng',
                'Xem , chỉnh sữa và đăng bài viết về thú cưng',
                'Chat, gữi địa chỉ, đơn hàng với admin',
                'Đánh giá sản phẩm đã mua',
                'Nhận thông báo',
                'Và các chức năng cơ bản khác',
            ],
            server: [
                'Dashbord xem thông tin về website',
                'Quản lí sản phâm',
                'Quản lí thú cưng',
                'Quản lí đơn nhận nuôi',
                'Quản lí đơn hàng',
                'Quản lí thông báo',
                'Chỉnh sửa thông báo mặc định',
                'Quản lí đánh giá và trả lời đánh giá',
                'Quản lí feedback của người dùng',
                'Và các chức năng cơ bản khác',
            ],
        },
        tectical: [
            {
                title: 'Front-end:',
                details: ['Nextjs, Tailwind, Redux'],
            },
            {
                title: 'Back-end:',
                details: ['Java sping boot', 'SQl server, Firebase'],
            },
        ],
        git: '',
    },
] as IProject[];

export default detail;
