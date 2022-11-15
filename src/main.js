import React, { useState } from "react";
import './main.css';



let musicArray=[
{
    'MusicId':'1',
    'musicName':'Let me down Slowly',
    'musciGenre':'POP',
    'musicSinger':'TEST',
    'musicImg':'/Images/image1.jpg',
    'musicAudio':'/sampleMP3.mp3'
},
{
    'MusicId':'2',
    'musicName':'Sample trrack',
    'musciGenre':'ROCK',
    'musicSinger':'TEST1',
    'musicImg':'/Images/image2.jpg',
    'musicAudio':'/sampleMP3.mp3'

},
{   
    'MusicId':'3',
    'musicName':'Track 2',
    'musciGenre':'Metal',
    'musicSinger':'TEST2',
    'musicImg':'/Images/image3.jpeg',
    'musicAudio':'/sampleMP3.mp3'

}
]



const MainContent=()=>{
    const [flag, updateFlag] = useState(true);

    const toggleFlag = () => {
        updateFlag(!flag);
        }
    return(
        <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Music Id</th>
                            <th>Music Name</th>
                            <th>Music Genre</th>
                            <th>Music Singer</th>
                            <th>Music Image</th>
                            <th>Play Music</th>

                        </tr>
                    </thead>
                    <tbody> 
                        <td>
                            {musicArray.map((m)=><tr>{m.MusicId}</tr>)}
                        </td><td>
                            {musicArray.map((m)=><tr>{m.musicName}</tr>)}
                        </td><td>
                            {musicArray.map((m)=><tr>{m.musciGenre}</tr>)}
                        </td><td>
                            {musicArray.map((m)=><tr>{m.musicSinger}</tr>)}
                        </td><td>
                            {musicArray.map((m)=><tr><img src={m.musicImg} alt="Not Found"></img></tr>)}
                        </td><td>
                            {musicArray.map((m)=><tr><a class="btn btn-warning" href={m.musicAudio} role="button">Play</a></tr>)}
                        </td>

                        
                    </tbody>
                </table>
        </div>
    );
}
export default MainContent;