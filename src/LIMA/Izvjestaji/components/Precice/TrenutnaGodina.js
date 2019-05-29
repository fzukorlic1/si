import React, { Component, Fragment } from 'react';
import { Icon } from '@opuscapita/react-icons';
import { Spinner } from 'reactstrap';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

import { predmeti, godine } from '../../api.js';

class TrenutnaGodina extends Component {
    constructor(props){
        super(props)
        this.state = {
            polozeni: null,
            nepolozeni: null,
        }
    }
    toggleCreateModal(){
        this.setState({
            createModal: !this.state.createModal
        })
    }
    componentDidMount(){
        let studentId = 3;
        godine.getTrenutnaGodina().then((godina)=>{
            predmeti.getPredmetiStudenta(studentId).then((data)=>{
                let { polozeni , nepolozeni } = data;
                this.setState({
                    polozeni: polozeni.map((predmet)=>{ return { naziv: predmet.naziv, predmetId: predmet.id, godinaId: godina.id }}),
                    nepolozeni: nepolozeni.map((predmet)=>{ return { naziv: predmet.naziv, predmetId: predmet.id, godinaId: godina.id }})
                })
            })
        });
    }
    renderIzvjestajiLinks(){
        let { polozeni, nepolozeni } = this.state;
        if(polozeni.length + nepolozeni.length == 0)return <div className="card-body border px-2 d-flex justify-content-center">Nemate predmeta.</div>
        return [
            polozeni.map((izvjestaj)=>{
                let { naziv, godinaId, predmetId } = izvjestaj;
                let putanja = `/Lima/izvjestaji/godina=${godinaId}&predmet=${predmetId}`;
                return <div className="card-body border p-0" key={`${izvjestaj.godinaId}${izvjestaj.predmetId}`}>
                    <div className="d-flex align-items-center w-100 LIMA-btn-green card-header py-0" style={{backgroundColor: "##ffb7b7"}}>
                        <Link to={putanja} className="d-flex align-items-center w-100" style={{minHeight: 50, color: 'black'}}>{naziv}</Link>
                    </div>
                </div>
            }),
            nepolozeni.map((izvjestaj)=>{
                let { naziv, godinaId, predmetId } = izvjestaj;
                let putanja = `/Lima/izvjestaji/godina=${godinaId}&predmet=${predmetId}`;
                return <div className="card-body border p-0" key={`${izvjestaj.godinaId}${izvjestaj.predmetId}`}>
                    <div className="d-flex align-items-center w-100 LIMA-btn-red card-header py-0">
                        <Link to={putanja} className="d-flex align-items-center w-100" style={{minHeight: 50, color: 'black'}}>{naziv}</Link>
                    </div>
                </div>
            }),
        ];
    }
    render(){
        return (
            <div className="pb-2">
                <h4 className="d-flex card-header border" style={{borderColor: '#f8f9fa'}}>
                    Predmeti ove godine
                </h4>
                {
                    this.state.polozeni ?
                    this.renderIzvjestajiLinks() :
                    <div className="card-body border px-2 d-flex justify-content-center">
                        <Spinner />
                    </div>
                }
            </div>
        )
    }
}


export default TrenutnaGodina;