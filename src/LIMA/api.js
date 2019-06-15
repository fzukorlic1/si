import axios from 'axios';

export const user = {
    getUloga: (userId) => {
        return new Promise((resolve, reject) => {
            let obj = {
                1: "STUDENT",
                2: "PROFESOR",
                3: "STUDENTSKA_SLUZBA"
            }
            resolve(obj[userId])
            axios.get(`http://si2019oscar.herokuapp.com/pretragaId/${userId}/dajUlogu`).then((res)=>{
                resolve(res.data)
            }).catch((err)=>{
                reject(err)
            });
        })
    }
}