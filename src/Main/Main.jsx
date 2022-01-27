import React from 'react';
import './Main.scss';
import Imgprincipal from '../principalmg.jpg';

const Principalmg = () => {
    return (
        <div className="containerimg">
            <img className={"imgprincipal"} src={Imgprincipal} alt="logo de la banda" />
        </div>
    )
}

export default Principalmg
