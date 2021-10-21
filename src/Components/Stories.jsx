import React from 'react'
import BobbyAscending from "./Images/bobby-ascending.webp"

const Stories = () => {

    const StoryCircle = () => {
        return (
            <div style={{justifyContent: "center", margin: "0px 10px"}}>
                <div style={{background: "linear-gradient(to right, orange, #c13584)", width: "66px", height: "66px",  borderRadius: "50%", margin: "0px auto", padding: "2px"}}>
                    <div style={{background: "white", padding: '2px', width: "100%", height: "100%", borderRadius: "50%"}}>
                        <img src={BobbyAscending} style={{width: "100%", height: "100%", borderRadius: "50%"}} alt="bobby-profile" />
                    </div>
                </div>
                <p style={{fontSize: "12px", marginTop: "5px", textAlign: "center"}}>bobby_hill</p>
            </div>
        )
    }

    return (
        <div style={{border: "1px solid #ccc", background: "white", height: "110px", display: "flex", alignItems: "center", padding: "20px 10px", maxWidth: "600px", margin: "0px auto", borderRadius: "2px"}}>
            {[0, 1, 2].map(() => (
                <StoryCircle />
            ))}
        </div>
    )
}

export default Stories
