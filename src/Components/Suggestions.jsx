import React from 'react'

import { Button } from '@chakra-ui/button'
import KanyeWest from "./Images/kanyewest.jpg"

const Suggestions = () => {

    const Suggestion = () => {
        return (
            <div style={{display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "space-between", margin: "10px auto"}}>
                <img src={KanyeWest} style={{width: "32px", height: "32px", borderRadius: "50%"}} />
                <div style={{display: "flex", flexDirection: "column"}}>
                    <p style={{fontSize: "14px"}}><strong>kanyewest</strong></p>
                    <p style={{opacity: "0.6", fontSize: "12px"}}>Followed by klamar and 99+ others</p>
                </div>
                <Button variant="unstyled" size="xs" style={{color: "rgb(0, 149, 246)"}}>
                    <p>Follow</p>
                </Button>
            </div>
        )
    }

    return (
        <div style={{width: "100%"}}>
            <div style={{display: 'flex', flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <p style={{opacity: "0.5", fontSize: "14px"}}><strong>Suggestions For You</strong></p>
                <Button variant="unstyled" size="xs">See All</Button>
            </div>
            {[0, 1, 2].map(() => (
                <Suggestion />
            ))}
        </div>
    )
}

export default Suggestions
