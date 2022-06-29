import { domainPath } from "./Config";

const DeleteAPI = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}/${data}`, {method: 'DELETE'})  // alamat URL API yang ingin dihapus datanya
            .then((result) => {
                resolve(result);        //jika succes menerima response dari server maka resolve response ke user
            }, (err) => {
                reject(err);            //jika terjadi error dari server (server down, dll)
        })
    })
}
export default DeleteAPI;