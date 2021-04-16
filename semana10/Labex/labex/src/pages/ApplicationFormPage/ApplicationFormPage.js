import React from 'react'
import useForm from '../../hooks/useForm'
import useRequestData from '../../hooks/useRequestData'
import { sendApplication } from '../../services/requests'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { goToListTripsPage } from '../../routes/coordinator'
import { Container, ButtonsContainer, Form, Input, Select, Button } from "./style"
import { countries } from '../../constants/countries';

const ApplicationFormPage = () => {
    const [tripId, setTripId] = useState("")
    const { form, onChange, clear } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })
    const [allTrips] = useRequestData("/trips", {})
    const history = useHistory()

    const clearFields = () => {
        clear()
        setTripId("")
    }

    const onClickSend = (e) => {
        e.preventDefault()
        sendApplication(form, tripId, clearFields)
    }

    const onChangeTrip = (e) => {
        setTripId(e.target.value)
    }

    const tripsOptions = allTrips.trips && allTrips.trips.map((trip) => {
        return <option key={trip.id} value={trip.id}>{trip.name}</option>
    })

    return (
        <Container>
            <h1>Venha Viajar com a Gente! 🚀</h1>
            <Form>
            <form onSubmit={onClickSend}>
                <Select defaultValue="" onChange={onChangeTrip}>
                    <option value="" disabled>Escolha uma Viagem</option>
                    {tripsOptions}
                </Select>
                <Input
                    placeholder={"Nome"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    pattern={"^.{3,}$"}
                    title={"O nome deve ter no mínimo 3 caracteres"}
                    required
                />
                <Input
                    placeholder={"Idade"}
                    type={"number"}
                    name={"age"}
                    value={form.age}
                    onChange={onChange}
                    required
                    min={18}
                />
                <Input
                    placeholder={"Texto de Candidatura"}
                    name={"applicationText"}
                    value={form.applicationText}
                    onChange={onChange}
                    required
                    pattern={"^.{30,}$"}
                    title={"O texto deve ter no mínimo 30 caracteres"}
                />
                <Input
                    placeholder={"Profissão"}
                    name={"profession"}
                    value={form.profession}
                    onChange={onChange}
                    required
                    pattern={"^.{10,}$"}
                    title={"A profissão deve ter no mínimo 10 caracteres"}
                />
                <Select
                    placeholder={"País"}
                    name={"country"}
                    value={form.country}
                    onChange={onChange}
                    required
                >
                    <option value={""} disabled>Escolha um País</option>
                    {countries.map((country) => {
                        return <option value={country} key={country}>{country}</option>
                    })}
                </Select>
                
                <ButtonsContainer>
                    <Button onClick={() => goToListTripsPage(history)}>Voltar</Button>
                    <Button type={"submit"}>Enviar</Button>
                </ButtonsContainer>
            </form>
            </Form>
        </Container>
    )
}

export default ApplicationFormPage