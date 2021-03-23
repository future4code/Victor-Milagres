import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario:'Aline',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },

      {
        nomeUsuario:'Aline',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },

      {
        nomeUsuario:'Aline',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      }
    ],
    postNomeUsuario: '',
    postFotoUsuario: '',
    postFotopost: ''
  }

  handleNome = (event) => {
    this.setState({postNomeUsuario: event.target.value})
  }

  handleFoto = (event) => {
    this.setState({postFotoUsuario: event.target.value})
  }

  handlePost = (event) => {
    this.setState({postFotopost: event.target.value})
  }

  adicionaPost = () =>{
    const novoPost = {
      nomeUsuario: this.state.postNomeUsuario,
      fotoUsuario: this.state.postFotoUsuario,
      fotoPost: this.state.postFotopost,
      }
      const novaLista = [...this.state.post]
      novaLista.push(novoPost); 
      this.setState({post: novaLista})

  }


  render() {
    const listaPosts = this.state.post.map((posts) => {
      return (
        <Post
        nomeUsuario= {posts.nomeUsuario}
        fotoUsuario= {posts.fotoUsuario}
        fotoPost= {posts.fotoPost}
        />
      )
    })
    return (
      <div className={'app-container'}>
        <input
        value={this.state.postNomeUsuario}
        onChange={this.handleNome}
        placeholder="Nome"
        />
          <input
          value={this.state.postFotoUsuario}
          onChange={this.handleFoto}
          placeholder="Foto"
        />
          <input
          value={this.state.postFotopost}
          onChange={this.handlePost}
          placeholder="Post"
        />
        <button onClick={this.adicionaPost}>Adicionar</button>
        {listaPosts}
      </div>
    );
  }
}

export default App;
