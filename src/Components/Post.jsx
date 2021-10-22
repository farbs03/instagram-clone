import React, {useState} from 'react'

import { Button, IconButton } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'

import {
        MdFavorite, 
        MdFavoriteBorder, 
        MdOutlineModeComment, 
        MdMoreHoriz, 
        MdBookmarkBorder, 
        MdBookmark, 
        MdInsertEmoticon
} from "react-icons/md"

import {AiOutlineSend} from "react-icons/ai"

import {motion} from "framer-motion"

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Menu,
    MenuList,
    MenuItem,
    Input
} from "@chakra-ui/react"

const PostOverlay = () => {

}

const Post = ({data}) => {

    const [liked, setLiked] = useState(false)
    const toggleLiked = () => {
        setLiked(!liked)
    }

    const [favorited, setFavorited] = useState(false)
    const toggleFavorited = () => {
        setFavorited(!favorited)
    }

    const [open, setOpen] = useState(false)

    return (
        <div style={{maxWidth: "600px", margin: "20px auto", background: "#fff", border: "1px solid rgb(219, 219, 219)", fontSize: "14px", borderRadius: "2px"}}>
            
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "16px"}}>
                
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <img src={data.Author.Profile} style={{width: "30px", height: "30px", borderRadius: "50%"}} />
                    <p style={{marginLeft: "10px"}}><strong>{data.Author.Username}</strong></p>
                </div>

                <IconButton variant="unstyled" onClick={() => setOpen(true)} icon={<Icon w={7} h={7} as={MdMoreHoriz} />} />
                <Modal isOpen={open} onClose={() => setOpen(false)} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalBody style={{padding: "0px"}}>
                            <Menu isOpen size="md">
                                <MenuList style={{textAlign: "center"}}>
                                    <MenuItem style={{fontWeight: "bold", color: "red", opacity: "0.8", alignItems: "center"}}>Report</MenuItem>
                                    <MenuItem style={{fontWeight: "bold", color: "red", opacity: "0.8"}}>Unfollow</MenuItem>
                                    <MenuItem>Go to post</MenuItem>
                                    <MenuItem>Tagged accounts</MenuItem>
                                    <MenuItem>Share to...</MenuItem>
                                    <MenuItem>Copy Link</MenuItem>
                                    <MenuItem>Embed</MenuItem>
                                    <MenuItem>Cancel</MenuItem>
                                </MenuList>
                            </Menu>
                        </ModalBody>
                    </ModalContent>
                </Modal>

            </div>

            <img src={data.Image} style={{width: "100%", height: "600px"}} />

            <div style={{padding: "16px", paddingBottom: "0px"}}>

                <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", margin: "5px -5px 10px -5px"}}>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>                    
                        <motion.div whileTap={{scale: 0.96}} style={{width: "32px", marginRight: "7px" }}>
                            <IconButton 
                                size="sm" 
                                style={{color: liked ? "rgb(255, 62, 62)" : "black"}} 
                                variant="unstyled"
                                onClick={toggleLiked}
                                icon={<Icon w={7} h={7} as={liked ? MdFavorite : MdFavoriteBorder} />} 
                            />
                        </motion.div>
                        <IconButton 
                            size="sm" 
                            style={{marginRight: "7px", marginTop: "1.5px"}} 
                            variant="unstyled" 
                            icon={<Icon w={7} h={7} as={MdOutlineModeComment} />} 
                        />
                        <IconButton 
                            size="sm" 
                            variant="unstyled"
                            style={{marginTop: "1px"}}
                            icon={<Icon w={7} h={7} as={AiOutlineSend} />} 
                        />
                    </div>
                    <IconButton 
                        size="sm" 
                        variant="unstyled"
                        style={{marginTop: "1px"}}
                        onClick={toggleFavorited}
                        icon={<Icon w={7} h={7} as={favorited ? MdBookmark : MdBookmarkBorder} />} 
                    />
                </div>

                <p>{data.Likes}</p>

                <p style={{marginTop: "5px"}}><strong>{data.Author.Username}</strong> {data.Description}</p>

                <p style={{opacity: "0.6"}}>View all {data.Comments} comments</p>
                {data.ExampleComment}

                <p style={{opacity: "0.6", fontSize: "12px", marginTop: "3px", marginBottom: "15px"}}>{data.Date}</p>
                
                <div style={{borderTop: "1px solid rgb(234, 234, 234)", margin: "0px -16px", marginTop: "10px", display: "flex", flexDirection: "row", alignItems: "center", padding: "10px 15px"}}>
                    <IconButton variant="unstyled" size="sm" style={{marginLeft: "-5px", marginRight: "10px"}} icon={<Icon w={7} h={7} as={MdInsertEmoticon}/>} />
                    <Input variant="unstyled" placeholder="Add a comment..." style={{fontSize: "14px"}} />
                    <Button variant="unstyled" size="sm" style={{marginLeft: "auto", color: "rgb(0, 149, 246)"}}>Post</Button>
                </div>
            </div>
        </div>
    )
}

export default Post;