import React from 'react';
import Stories from './Stories'
import styled from 'styled-components'
import Messenger from './Messenger'
import Post from './Post'

const Feed = () => {
    return (
        <FeedWrapper>
            <Stories />
            <Messenger />
            <Post profilePic=""
             message=""
             timestamp=""
             imgName=""
             userName=""
            />
            <Post profilePic=""
             message=""
             timestamp=""
             imgName=""
             userName=""
             />
        </FeedWrapper>
    )
}

const FeedWrapper = styled.div`
    flex: 1;
    padding: 30px 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default Feed