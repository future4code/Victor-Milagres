import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useHistory } from 'react-router-dom'
import { goToCreateTripPage, goToHomePage } from '../../routes/coordinator'
import { logout } from '../../services/requests'
import { Container, ButtonsContainer, Button } from "./style"
import useRequestData from '../../hooks/useRequestData'
import AdminTripCard from "../../components/AdminTripCard/AdminTripCard"



const AdminHomePage = () => {
    useProtectedPage()
    const history = useHistory()
    const [tripsData, getTrips] = useRequestData("/trips", {})

    const tripsList = tripsData.trips && tripsData.trips.map((trip) => {
        return <AdminTripCard key={trip.id} name={trip.name} id={trip.id} getTrips={getTrips} />
    })

    return (
        <Container>
            <h1>Painel Administrativo</h1>
            <ButtonsContainer>
                <Button onClick={() => goToHomePage(history)}>Voltar</Button>
                <Button onClick={() => goToCreateTripPage(history)}>Criar Viagem</Button>
                <Button onClick={() => logout(history)}>Logout</Button>
            </ButtonsContainer>
            {tripsList && tripsList.length > 0 ? tripsList : <p>Aguarde alguns instantes...</p>}
        </Container>
    )
}

export default AdminHomePage