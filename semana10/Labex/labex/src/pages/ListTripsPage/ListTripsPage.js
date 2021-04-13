import React from 'react'
import { goToHomePage, goToApplicationFormPage } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'


const ListTripsPage = () => {
    const history = useHistory()

    return (

        <div>
            <button onClick={() => goToHomePage(history)}>Voltar</button>
            <button onClick={() => goToApplicationFormPage(history)}>Inscrever-se</button>
        </div> 
    )
}

export default ListTripsPage