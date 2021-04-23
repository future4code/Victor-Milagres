import React from 'react'
import TripCard from "../../components/TripCard/TripCard"
import useRequestData from "../../hooks/useRequestData"
import { goToHomePage, goToApplicationFormPage } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import { ButtonsContainer, ListContainer, Button, Titulo } from "./style"


const ListTripsPage = () => {
    const [tripsData] = useRequestData("/trips", {})
    const history = useHistory()

    const tripsList = tripsData.trips && tripsData.trips.map((t) => {
        return <TripCard key={t.id} trip={t} />
    })

    return (
        <div>
            <ButtonsContainer>
                <Button onClick={() => goToHomePage(history)}>Voltar</Button>
                <Button onClick={() => goToApplicationFormPage(history)}>Inscrever-se</Button>
            </ButtonsContainer>
            <Titulo>
            <h1>Lista de Viagens</h1>
            </Titulo>
        <ListContainer>
            {tripsList && tripsList.length > 0 ? tripsList : <p>Aguarde um instante...</p>}
        </ListContainer>
        </div>
    )
}

export default ListTripsPage