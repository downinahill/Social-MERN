import React, { useState } from 'react'
import { Avatar, Input } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
// import PhotoLibraryIcon from '@material-ui/icons/PhotoLibraryIcon'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import styled from 'styled-components'

const Messenger = () => {
    const [input, setInput] = useState('')

    const [image, setImage] = useState(null)
    const handleChange = e =>{
        if(e.target.files[0])
            setImage(e.target.files[0])
    }
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <MessengerWrapper>
            <MessengerTop>
                <Avatar />
            <form>
                <input 
                    type="text"
                    className="messenger_input"
                    placeholder="What's on your mind?"
                    value={input}
                    onChange={e => setInput(e.target.value)}
            />
            <input
                type="file"
                className="messenger_fileSelector"
                onChange={handleChange}
            />
            <button onClick={handleSubmit} type="submit">hidden
            </button>
            </form>
            </MessengerTop>
            <MessengerBottom>
                <div className="messenger_option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messenger_option">
                    {/* <PhotoLibraryIcon style={{ color: 'green' }} /> */}
                    <h3>Photo/Video</h3>
                </div>
                <div className="messenger_option">
                    <InsertEmoticonIcon style={{ color: 'green' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </MessengerBottom>
        </MessengerWrapper>
    )
}

const MessengerWrapper = styled.div`
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 5px 7px -7px rgba(0,0,0,0.75)
    width: 100%;
`

const MessengerTop = styled.div`
    display: flex;
    border-bottom: 1px solid #eff2f5;
    padding: 15px;
    form {
        flex: 1;
        display: flex;
        .messenger_input {
            flex: 1;
            outline-width: 0;
            border: none;
            padding: 5px 20px;
            margin: 0 10px;
            border-radius: 999px;
            background-color: #eff2f5;
        }
        .messenger_fileSelector {
            width: 100%;
        }
        button {
            display: none;
        }
    }
`

const MessengerBottom = styled.div`
    display: flex;
`

export default Messenger