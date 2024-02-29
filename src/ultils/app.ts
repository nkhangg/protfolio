import { auth } from '@/config/firebase';

export const isOwner = () => {
    if (!auth.currentUser) return false;

    if (auth.currentUser.email !== 'phamnhatkhang.hgi1167@gmail.com') return false;

    return true;
};

export const user = () => {
    return auth.currentUser;
};

export const delay = (delayInms: number) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
};
