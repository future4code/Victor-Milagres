import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToCreateTripPage, goToHomePage } from '../../routes/coordinator'




const AdminHomePage = () => {
    const history = useHistory()

    return (
        <div>
            <h1>Painel Administrativo</h1>
           
                <button onClick={() => goToHomePage(history)}>Voltar</button>
                <button onClick={() => goToCreateTripPage(history)}>Criar Viagem</button>
                <button >Logout</button>
        </div>
    )
}

export default AdminHomePage