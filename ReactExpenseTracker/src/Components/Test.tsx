import React from "react"

function Test () {

    const sta = ["dfv","sfdv","rtg"]
    return (
        <>
            {
                sta && (
                    sta.map(
                        ab => (
                            <div>{ab}</div>
                        )
                    )
                )
                
            }
        </>
    )
}
export default Test