import React, {useState} from 'react'

import { Heading, Link, Flex, Spacer, HStack } from '@chakra-ui/layout'
import {IconButton} from "@chakra-ui/react"

import Logo from "./instagram-logo.png"

import { Input, Icon } from "@chakra-ui/react"
import { 
    MdHome, MdOutlineHome,
    MdMessage, MdOutlineMessage,
    MdOutlineAddBox,
    MdExplore, MdOutlineExplore,
    MdFavorite, MdFavoriteBorder,
    MdAccountCircle, MdOutlineAccountCircle,
    MdSearch
} from "react-icons/md"

import ChrisProfile from "../Images/chris-profile.jpg"

const Navbar = (props) => {

    const items = [
        {
            Link: "/home",
            Selected: MdHome,
            UnSelected: MdOutlineHome
        },
        {
            Link: "/messages",
            Selected: MdMessage,
            UnSelected: MdOutlineMessage
        },
        {
            Link: "/new-post",
            Selected: MdOutlineAddBox,
            UnSelected: MdOutlineAddBox
        },
        {
            Link: "/explore",
            Selected: MdExplore,
            UnSelected: MdOutlineExplore
        },
        {
            Link: "/activity",
            Selected: MdFavorite,
            UnSelected: MdFavoriteBorder
        },
    ]

    const [selectedItem, setSelectedItem] = useState(0)

    const NavItem = ({item, idx}) => {
        return (
            <IconButton 
                variant="unstyled" 
                style={{padding: "0px"}} 
                onClick={() => setSelectedItem(idx)}
                size="md"
                icon={<Icon w={7} h={7} as={selectedItem === idx ? item.Selected : item.UnSelected} />}
            />
        )
    }

    return (
        <>
            <div style={{borderBottom: "1px solid rgb(219, 219, 219)", background: "white", height: "60px", padding: "10px 50px", position: "fixed", width: "100%", zIndex: "1"}}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", maxWidth: "910px", margin: "0px auto"}}>
                    <Link href="/" style={{marginBottom: "-10px"}}>
                        <img src={Logo} alt="logo" style={{width: "103px", height: "29px"}} />
                    </Link>

                    <Input placeholder="Search" maxW="215px" style={{background: "rgb(245, 245, 245)", fontSize: '14px', height: "30px"}} />

                    <HStack>

                        {items.map((item, idx) => (
                            <NavItem item={item} idx={idx} />
                        ))}

                        <Link> 
                            <img src={ChrisProfile} style={{width: "28px", height: "28px", borderRadius: "50%"}} />
                        </Link>
                    </HStack>
                </div>
            </div>
            <div className="main" style={{background: "rgb(250, 250, 250)"}}>
                {props.children}
            </div>
        </>
    )
}

export default Navbar
