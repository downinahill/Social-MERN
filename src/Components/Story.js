import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

const Story = ({ image, profileSrc, title }) => {
    return (
        <StoryWrapper imageUrl={`${image}`}>
            <Avatar src={profileSrc} className="story_avatar" />
            <h4>{title}</h4>
        </StoryWrapper>
    )
}

const StoryWrapper = styled.div`
    background-image: url(${props => props.imageUrl ? props.imageUrl : ''});
    

`

export default Story