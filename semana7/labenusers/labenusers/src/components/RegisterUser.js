import React from 'react'
import style from 'styled-components'

const FormContainer = style.div `
    width: 300px;
    height: 200px;
    border: solid 1px #000;
    margin: 0 auto;
    display: flex;
    align-itens: center;
    flex-direction: column;
    padding: 30px;
    margin-top: 50px;


    div {
        margin-bottom: 15px;
        padding: 12px;
    }

    input {
        margin-left: 8px;
        padding: 2px;
    }

`
const Button = style.button `
    padding: 8px;
    margin-top: 16px;
    background: #f04c64;
    color: white;
    font-weight: bolder;
    border: none;
    cursor:pointer;

`
/* state = {
      email: "",
      name: ""
    };
  
    handleOnInputChange = event => {
  const { target } = event;
  const { id, value } = target;

  this.setState({ [id]: value });
};

    saveUser = () => {
  const { name, email } = this.state;
  this.props.onCreateUser(name, email);
}; */



export default class RegisterUsers extends React.Component{



    render(){
        return(
            <FormContainer>
                <div>
                    <label>Nome:</label>
                    <input 
                  /*   required
                    id="name"
                    name="name"
                    type="text"
                    onChange={this.handleOnInputChange}
                    value={this.state.name} */
                    />
                </div>
                <div>
                    <label>E-mail:</label>
                    <input 
                  /*     required
                      id="email"
                      name="email"
                      type="email"
                      onChange={this.handleOnInputChange}
                      value={this.state.email} */
                    />
                </div>
                <Button onClick={this.saveUser}>Salvar</Button>
            </FormContainer>
        )
    }
}