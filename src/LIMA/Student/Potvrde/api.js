import * as dummy from './static/dummy.js';
import axios from 'axios';
import { student } from '../Izvjestaji/api.js';

let nasBackendURL = "http://localhost:31912";
//let nasBackend = "https://si2019lima.herokuapp.com";

export const potvrde = {
    get: (potvrdaId) => (
        new Promise((resolve, reject) => {
            fetch(nasBackendURL + "/informacijeZaPotvrdu/"+potvrdaId).then(res => res.json()).then(
                result => {
                    resolve(result);
                },
                error => {
                    reject(error);
                }
            );
        })
    ),
    getPotvrdeStudent: (studentId) => (
        new Promise((resolve, reject) => {
            axios.get(nasBackendURL + "/dajSveZahtjeveStudent/"+studentId, {
                studentId: studentId
            }).then( res => {
                resolve(res.data.zahtjevi)
            }).catch( err => reject({
                message: "Greska pri obradi."
            }))
        })
    ),
    getPotvrdeSluzba: (uposlenikId) => (
        new Promise((resolve, reject) => {
            fetch(nasBackendURL + "/dajSveZahtjeve").then(res => res.json()).then(
                result => {
                    resolve(result.zahtjevi);
                },
                error => {
                    reject(error);
                }
            );
        })
    ),
    obradiZahtjev: (zahtjevId) => (
        new Promise((resolve, reject) => {
            axios.post(nasBackendURL + "/obrada", {
                zahtjevId: zahtjevId
            }).then( res => resolve({
                datumObrade: res.data
            })).catch( err => reject({
                message: "Greska pri obradi."
            }))
        })
    ),
    otkaziZahtjev: (zahtjevId) => (
        new Promise((resolve, reject) => {
            axios.post(nasBackendURL + "/otkaziZahtjev", {
                zahtjevId: zahtjevId
            }).then( res => resolve({
                message: "Uspješno otkazano."
            })).catch( err => reject({
                message: "Greska pri obradi."
            }))
        })
    ),
    kreirajZahtjev: (svrhaId, studentId) => (
        new Promise((resolve, reject) => {
            axios.post(nasBackendURL + "/kreirajPotvrdu", {
                idStudenta: studentId,
                idSvrhe: svrhaId,
                idAkademskeGodine: 11,
            }).then( res => resolve(res.data)).catch( err => reject({
                message: "Greska pri obradi."
            }))
        })
    ),
    getSvrhe: () => (
        new Promise((resolve, reject) => {
            axios.get(nasBackendURL + "/svrhe").then((response) => {
                resolve(response.data);
            });
        })
    )
};
