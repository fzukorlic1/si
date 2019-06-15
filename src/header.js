import React from 'react'
import {Link} from 'react-router-dom'

export default class App extends React.Component {
    render() {
        let timovi = ["Alpha", "Beta", "Charlie", "Delta", "Echo", "Fox", "Golf", "Hotel", "India",
                        "Juliet", "Kilo", "Lima", "Mike", "November", "Oscar", 
                         "Papa", "Romeo", "Siera", "Tango", "Uniform"];
        return (
            <div style={{backgroundColor: "#00203f"}} className="nav-link active"> 
                {timovi.map(t => <div key={t} style={{display: "inline"}}> <Link style={{color: "#adefd1"}} to={`/${t}`}> {t} </Link> </div>)}
            </div>
        ) 
    }
}