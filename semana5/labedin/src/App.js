import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import selfie from './images/selfie2.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno';
import email from './images/email.png';
import phone from './images/phone-call.png'
import residencia from './images/endereco-residencial.png'
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={selfie} 
          nome="Victor Pereira Milagres" 
          descricao="Oi, eu sou o Victor. Sou aluno da turma Cruz da Labenu. Estou cursando o curso de Desenvolvimento Web Full Stack para ingressar no mercado de Tecnologia."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
          <h2>Contato</h2>
          <CardPequeno
          imagem={email}
          texto="victoralunolabenucruz@labenu.com"
          />

          <CardPequeno
           imagem={phone}
           texto="(XX) 99999-9999"
          />

          <CardPequeno
           imagem={residencia}
           texto="Rua: XXXXXXXXXXXXXXX"
          />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando Para Lua." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
