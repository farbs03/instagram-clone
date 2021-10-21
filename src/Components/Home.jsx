import React from 'react'
import { Flex, Heading } from '@chakra-ui/layout'

import PostImage from "./Images/honolulu.webp"
import ChrisProfile from "./Images/chris-profile.jpg"
import BobbyAscending from "./Images/bobby-ascending.webp"

import { Button, IconButton } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import {MdFavoriteBorder, MdOutlineModeComment, MdMoreHoriz} from "react-icons/md"
import {AiOutlineSend} from "react-icons/ai"

import Stories from "./Stories"
import Post from "./Post"
import Suggestions from "./Suggestions"

const Home = () => {

    const exampleUser = {
        Name: "Chris Farber",
        Username: "cfarbs03",
        Profile: ChrisProfile,
        Link: "#"

    }
    const examplePost = {
        Author: exampleUser,
        Image: PostImage,
        Description: "Honolulu was fun ig",
        Likes: <div style={{display: "flex", alignItems: "center"}}><img src={BobbyAscending} style={{width: "20px", height: "20px", borderRadius: "50%", marginRight: "5px"}} /><p>Liked by <strong>alexjurkovich</strong> and <strong>79 others</strong></p></div>,
        Date: "October 8",
        Comments: 8,
        ExampleComment: <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}><p><strong>kanyewest</strong> omg so pretty!!!!</p><IconButton size="xs" variant="unstyled" icon={<Icon as={MdFavoriteBorder} />} /></div>
    }

    

    return (
        <div style={{padding: "30px 10px", display: "flex", flexDirection: "row", justifyContent: "center", overflowX: "hidden"}}>
            <div style={{marginRight: "20px", maxWidth: "600px"}}>
                <Stories />
                
                {[0, 1, 2].map(() => (
                    <Post data={examplePost} />
                ))}
            </div>
            <div>
                <div style={{maxWidth: "400px", padding: "20px 0px", display: "flex", flexDirection: "row", fontSize: "14px", alignItems: "center"}}>
                    <img src={ChrisProfile} style={{width: "56px", height: "56px", borderRadius: "50%", marginRight: "10px"}} />
                    <div style={{display: "flex", flexDirection: "column", width: "175px"}}>
                        <p><strong>{exampleUser.Username}</strong></p>
                        <p style={{opacity: "0.6"}}>{exampleUser.Name}</p>
                    </div>
                    <Button variant="unstyled" size="xs" style={{color: "rgb(0, 149, 246)"}}>
                        <p>Switch</p>
                    </Button>
                </div>
                
                <Suggestions />
                
                <p style={{opacity: "0.5", marginTop: "20px", fontSize: "11px"}}>© 2021 INSTAGRAM FROM FACEBOOK</p>
            </div>
        </div>
    )
}

export default Home
