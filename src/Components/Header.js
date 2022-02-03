import React from 'react';
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import FlagIcon from '@material-ui/icons/Flag'
import HomeIcon from '@material-ui/icons/Home'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
// import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircleIcon'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Flag'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderLeft>
                {/* <img src="logo192.png" alt="Popular" /> */}
            </HeaderLeft>
            <HeaderInput>
                <SearchIcon />
                <input placeholder="Search Popular" type="text" />
            </HeaderInput>
            <HeaderCenter>
                <div className="header_option header_option--active">
                    <HomeIcon fontsize="large" />
                </div>
                <div className="header_option">
                    <FlagIcon fontsize="large" />
                </div>
                <div className="header_option">
                    <SubscriptionsOutlinedIcon fontsize="large" />
                </div>
                <div className="header_option">
                    <StorefrontOutlinedIcon fontsize="large" />
                </div>
                <div className="header_option">
                    {/* <SupervisedUserCircleIcon fontsize="large" /> */}
                </div>
            </HeaderCenter>
            <HeaderRight>
                <div className="header_info">
                    <Avatar />

                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
            
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />

                </IconButton>

            </HeaderRight>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    display: flex;
    padding: 5px 2px;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    background-color: white;
    z-index: 100;
    top: 0;
    box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
    `
const HeaderLeft = styled.div`
    display: flex;
    justify-content: space-evenly;
    img {
        height:40 px;
    }
`
const HeaderInput = styled.div`
    display: flex;
    align-items: center;
    background-color: #eff2f5;
    padding: 10px;
    margin-left: 10px;
    border-radius: 33px;
    input{
        border: none;
        background-color: transparent;
        outline-width: 0;
    }
`
const HeaderCenter = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    .header_option{
        display: flex;
        align-items: center;
        padding: 10px 30px;
        cursor: pointer;
        .MuiSvgIcon-root{
            color: gray;
        }
        &:hover{
            background-color: #eff2f5;
            border-radius: 10px;
            align-items: center;
            padding: 0 30px;
            border-bottom: none;
            .MuiSvgIcon-root{
                color: #2e81f4;
            }
        }
    }
    .header_option--active{
        border-bottom: 4px solid #2e81f4;
        .MuiSVGIcon-root{
            color: #2e81f4;
        }
    }
`

const HeaderRight = styled.div`
    display: flex;
    .header_info{
        display: flex;
        align-items: center;
        h4{
            margin-left: 10px;
        }
    }
`


export default Header