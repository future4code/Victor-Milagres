import React from "react"
import { CardContainer, DeleteButton } from './style'
import { useHistory } from 'react-router-dom'
import { goToTripDetailsPage } from '../../routes/coordinator'
import { deleteTrip } from '../../services/requests'


const AdminTripCard = (props) => {
    const { id, name, getTrips } = props
    const history = useHistory()

    const onClickDelete = (e) => {
        e.stopPropagation()
        if (window.confirm(`Tem certeza que deseja deletar a viagem ${name}?`)) {
            deleteTrip(id, getTrips)
        }
    }

    return (
        <CardContainer onClick={() => goToTripDetailsPage(history, id)}>
            <p>{name}</p>
            <DeleteButton onClick={onClickDelete}>Delete</DeleteButton>
        </CardContainer>
    )
}

export default AdminTripCard