import React, {useState} from 'react'

import { Heading, Link, Flex, Spacer, HStack } from '@chakra-ui/layout'
import {IconButton} from "@chakra-ui/react"

import Logo from "./instagram-logo.png"

import { Input, Icon } from "@chakra-ui/react"
import { 
    MdHome, MdOutlineHome,
    MdMessage, MdOutlineMessage,
    MdExplore, MdOutlineExplore,
    MdFavorite, MdFavoriteBorder,
    MdAccountCircle, MdOutlineAccountCircle
} from "react-icons/md"

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
            Link: "/explore",
            Selected: MdExplore,
            UnSelected: MdOutlineExplore
        },
        {
            Link: "/activity",
            Selected: MdFavorite,
            UnSelected: MdFavoriteBorder
        },
        {
            Link: "/profile",
            Selected: MdAccountCircle,
            UnSelected: MdOutlineAccountCircle
        },
    ]

    const [selectedItem, setSelectedItem] = useState(0)

    const NavItem = ({item, idx}) => {
        return (
            <IconButton 
                variant="unstyled" 
                style={{padding: "0px"}} 
                onClick={() => setSelectedItem(idx)}
                icon={<Icon w={6} h={6} as={selectedItem === idx ? item.Selected : item.UnSelected} />}
            />
        )
    }

    return (
        <>
            <div style={{borderBottom: "1px solid #ccc", height: "60px", padding: "10px 50px"}}>
                <Flex style={{justifyContent: "center", alignItems: "center", maxWidth: "1200px", margin: "0px auto"}}>
                    <Link href="/">
                        <img src={Logo} alt="logo" style={{width: "100px"}} />
                    </Link>

                    <Spacer />

                    <Input placeholder="Search" maxW="300px" style={{background: "rgb(245, 245, 245)"}} />

                    <Spacer />

                    <HStack>
                        {items.map((item, idx) => (
                            <NavItem item={item} idx={idx} />
                        ))}
                    </HStack>
                </Flex>
            </div>
            <div className="main">
                {props.children}
            </div>
        </>
    )
}

export default Navbar
