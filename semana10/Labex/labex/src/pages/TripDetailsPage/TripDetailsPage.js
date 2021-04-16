import React from 'react'
import { useHistory, useParams } from "react-router-dom"
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { goToAdminHomePage } from '../../routes/coordinator'
import CandidateCard from '../../components/CandidateCard/CandidateCard'
import { TripDataContainer, TripContainer, Button } from "./style"

const TripDetailsPage = () => {
    useProtectedPage()
    const history = useHistory()
    const { id } = useParams()
    const [tripDetails, getTripDetails] = useRequestData(`/trip/${id}`)

    const candidates = tripDetails && tripDetails.trip && tripDetails.trip.candidates.map((cand) => {
        return <CandidateCard key={cand.id} candidate={cand} tripId={id} getTripDetails={getTripDetails} />
    })

    const approvedCandidates = tripDetails && tripDetails.trip && tripDetails.trip.approved.map((cand) => {
        return <li key={cand.id}>{cand.name}</li>
    })

    return (
        <TripContainer>

            {tripDetails && tripDetails.trip && <h1>{tripDetails.trip.name} 🚀</h1>}
            {tripDetails && tripDetails.trip && <TripDataContainer>
                <p><b>Nome:</b> {tripDetails.trip.name}</p>
                <p><b>Descrição:</b> {tripDetails.trip.description}</p>
                <p><b>Planeta:</b> {tripDetails.trip.planet}</p>
                <p><b>Duração:</b> {tripDetails.trip.durationInDays}</p>
                <p><b>Data:</b> {tripDetails.trip.date}</p>
            </TripDataContainer>}

            <h2>Candidatos Pendentes</h2>
            {candidates && candidates.length > 0 ? candidates : <p>Não há candidatos pendentes</p>}

            <h2>Candidatos Aprovados</h2>
            {approvedCandidates && approvedCandidates.length > 0 ? approvedCandidates : <p>Não há candidatos aprovados</p>}
            <Button onClick={() => goToAdminHomePage(history)}>Voltar</Button>
        </TripContainer>
    )
}

export default TripDetailsPage
