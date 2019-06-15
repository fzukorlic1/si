import React, { Component, Fragment } from 'react';
import { Collapse, Spinner } from 'reactstrap';
import { toast } from 'react-toastify';
import { dataPredmetPoGodini, predmeti } from '../../../../Student/Izvjestaji/api.js';
import { default as GodinaPredmetGUI } from '../../../../Student/Izvjestaji/components/GodinaPredmet/GodinaPredmet.js';


class GodinaPredmet extends Component {
    constructor(props){
        super(props);
        this.state = {
            daLiJeTabelarno: "true",
        }
    }
    componentDidMount(){
        let { daLiJeTabelarno } = this.props.match.params;
        this.setState({
            daLiJeTabelarno: daLiJeTabelarno
        })
    }
    render(){
        return (
            this.state.daLiJeTabelarno == "true" ?
            <div> tabela</div> :
            <GodinaPredmetGUI {...this.props} />
        )
    }
}


export default GodinaPredmet;