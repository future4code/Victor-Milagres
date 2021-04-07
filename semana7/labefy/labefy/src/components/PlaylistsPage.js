import React from 'react';
import axios from 'axios';
import style from 'styled-components';
import { axiosConfig, baseUrl } from './Parameters';


const List = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`

export default class PlaylistPage extends React.Component {
   state = {
       listPlaylists: []
   }
   
   componentDidMount(){
       this.getAllPlaylists()
   }
   getAllPlaylists = async () => {
       try{
           const response = await axios.get(baseUrl, axiosConfig)
           console.log(response.data)
           this.setState({listPlaylists: response.data})
       } catch(error){
           console.log(error)
       }
   }

   deletePlaylist = (id) => {
       axios.delete (`${baseUrl}/${id}`, axiosConfig)
       .then((res) =>{
           this.getAllPlaylists()
       })
       .catch((err) =>{
        console.log(err)
       })
   }
   
    render(){
        return(
            <List>
                <h2>Playlists</h2>
                {this.state.listPlaylists.map((playlists) =>{
                    return (
                        <div>
                            <p>{playlists.playlist}</p>
                            <button onClick={() => {this.deletePlaylist(playlists.playlist)}}></button>
                        </div>
                    )
                })}
            </List>
        )
    }
}