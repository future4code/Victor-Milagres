import React from 'react'
import { useHistory} from "react-router-dom"
import { goToAdminHomePage } from '../../routes/coordinator'



const TripDetailsPage = () => {
    const history = useHistory()

    return (
        <div>
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
        </div>
            

    )
}

export default TripDetailsPage
