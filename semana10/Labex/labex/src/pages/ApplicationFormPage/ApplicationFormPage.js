import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToListTripsPage } from '../../routes/coordinator'


const ApplicationFormPage = () => {
    const history = useHistory()

  

    return (
        <div>
        <button onClick={() => goToListTripsPage(history)}>Voltar</button>
        <button type={"submit"}>Enviar</button>
        </div>
    )
}

export default ApplicationFormPage