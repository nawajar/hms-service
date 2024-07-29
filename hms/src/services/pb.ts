import PocketBase from 'pocketbase'
import { useLoaderStore } from '@/stores/loader';

export const pb = new PocketBase(import.meta.env.API_URL)


export function init() {
    const store = useLoaderStore();
    pb.beforeSend = function (url, options) {
        store.show()
        console.log('send')
        return { url, options }
    };
    
    pb.afterSend = function (response, data) {
        store.hide()
        console.log('send end')
        return data
    };
}
