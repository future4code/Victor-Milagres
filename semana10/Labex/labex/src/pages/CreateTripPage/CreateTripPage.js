import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useHistory } from 'react-router-dom'
import { goToAdminHomePage } from '../../routes/coordinator'
import useForm from "../../hooks/useForm"
import { createTrip } from "../../services/requests"
import { ButtonsContainer, Container, Form, Input, Select, Button } from "./style"
import { planets } from '../../constants/planets'

const CreateTripPage = () => {
    useProtectedPage()
    const history = useHistory()
    const { form, onChange, clear } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

    const onClickCreate = (e) => {
        e.preventDefault()
        createTrip(form, clear)
    }

    const today = new Date()
    const stringToday = today.getFullYear() + "-" +
    ("0" + (today.getMonth() + 1)).substr(-2) + "-"
    + ("0" + today.getDate()).substr(-2)

    return (
        <Container>
            <h1>Criar Viagem 🚀</h1>
            <Form onSubmit={onClickCreate}>
                <Input
                    placeholder={"Nome"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    pattern={"^.{5,}$"}
                    title={"O nome da viagem deve ter no mínimo 5 caracteres"}
                    required
                />
                <Select
                    placeholder={"Planeta"}
                    name={"planet"}
                    defaultValue={""}
                    onChange={onChange}
                    required
                >
                    <option value={""} disabled>Escolha um Planeta</option>
                    {planets.map((planet) => {
                        return <option value={planet} key={planet}>{planet}</option>
                    })}
                </Select>
                <Input
                    placeholder={"Data"}
                    type={"date"}
                    name={"date"}
                    value={form.date}
                    onChange={onChange}
                    required
                    min={stringToday}
                />
                <Input
                    placeholder={"Descrição"}
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    required
                    pattern={"^.{30,}$"}
                    title={"O nome deve ter no mínimo 30 caracteres"}
                />
                <Input
                    placeholder={"Duração em dias"}
                    type={"number"}
                    name={"durationInDays"}
                    value={form.durationInDays}
                    onChange={onChange}
                    required
                    min={50}
                />
                <ButtonsContainer>
                    <Button onClick={() => goToAdminHomePage(history)}>Voltar</Button>
                    <Button type={"submit"}>Criar</Button>
                </ButtonsContainer>
            </Form>
        </Container>
    )
}

export default CreateTripPage