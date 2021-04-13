import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToAdminHomePage } from '../../routes/coordinator'


const CreateTripPage = () => {
    const history = useHistory()
    return (
        <div>
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
            <button type={"submit"}>Criar</button>
        </div>
    )
}

export default CreateTripPage