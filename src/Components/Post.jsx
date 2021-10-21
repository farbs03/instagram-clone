import React from 'react'
import { Flex, Heading } from '@chakra-ui/layout'
import PostImage from "./Images/honolulu.webp"
import ProfileImage from "./Images/chris-profile.jpg"
import { IconButton } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import {MdFavoriteBorder, MdOutlineModeComment, MdMoreHoriz} from "react-icons/md"
import {AiOutlineSend} from "react-icons/ai"

const Post = ({data}) => {
    return (
        <div style={{maxWidth: "600px", margin: "20px auto", background: "#fff", border: "1px solid #ccc", fontSize: "14px", borderRadius: "2px"}}>
            
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "16px"}}>
                
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <img src={data.Author.Profile} style={{width: "30px", height: "30px", borderRadius: "50%"}} />
                    <p style={{marginLeft: "10px"}}><strong>{data.Author.Username}</strong></p>
                </div>

                <IconButton variant="unstyled" icon={<Icon w={7} h={7} as={MdMoreHoriz} />} />

            </div>

            <img src={data.Image} style={{width: "100%", height: "600px"}} />

            <div style={{padding: "16px"}}>

                <div style={{display: "flex", flexDirection: "row", margin: "5px -5px 10px -5px"}}>
                    <IconButton size="sm" style={{marginRight: "10px"}} variant="unstyled" icon={<Icon w={7} h={7} as={MdFavoriteBorder} />} />
                    <IconButton size="sm" style={{marginRight: "10px"}} variant="unstyled" icon={<Icon w={7} h={7} as={MdOutlineModeComment} />} />
                    <IconButton size="sm" variant="unstyled" icon={<Icon w={7} h={7} as={AiOutlineSend} />} />
                </div>

                <p>{data.Likes}</p>

                <p style={{marginTop: "5px"}}><strong>{data.Author.Username}</strong> {data.Description}</p>

                <p style={{opacity: "0.6"}}>View all {data.Comments} comments</p>
                {data.ExampleComment}

                <p style={{opacity: "0.6", fontSize: "12px", marginTop: "3px"}}>{data.Date}</p>

            </div>
        </div>
    )
}

export default Post;