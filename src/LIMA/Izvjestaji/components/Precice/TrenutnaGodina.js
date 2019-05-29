import React, { Component, Fragment } from 'react';
import { Icon } from '@opuscapita/react-icons';
import { Spinner } from 'reactstrap';
import { toast } from 'react-toastify';

import Precica from './Precica.js';
import { predmeti } from '../../api.js';

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
        predmeti.getPredmetiStudenta(studentId).then((data)=>{
            let { polozeni , nepolozeni } = data;
            this.setState({
                izvjestaji: izvjestaji
            })
        })
    }
    renderIzvjestajiLinks(){
        if(this.state.izvjestaji.length == 0)return <div className="card-body border px-2 d-flex justify-content-center">Nemate sacuvanih izvjestaja.</div>
        return this.state.izvjestaji.map((izvjestaj)=>{
            return <div className="card-body border p-0" key={`${izvjestaj.godinaId}${izvjestaj.predmetId}`}>
                <Precica izvjestaj={izvjestaj} deleteIzvjestaj={(izvjestaj)=>{this.deleteIzvjestajLink(izvjestaj)}}/>
            </div>
        })
    }
    render(){
        return (
            <Fragment>
                <h4 className="d-flex card-header border" style={{borderColor: '#f8f9fa'}}>
                    Sacuvani izvjestaji
                    <div onClick={()=>{this.toggleCreateModal()}} className="float-right" style={{position: 'absolute', right: '20px', cursor: 'pointer'}}>
                        <Icon type="indicator" name="plus" />
                    </div>
                </h4>
                {
                    this.state.izvjestaji ?
                    this.renderIzvjestajiLinks() :
                    <div className="card-body border px-2 d-flex justify-content-center">
                        <Spinner />
                    </div>
                }
            </Fragment>
        )
    }
}


export default TrenutnaGodina;