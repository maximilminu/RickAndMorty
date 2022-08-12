import React from 'react'
import Button from 'react-bootstrap/Button';

const BlockButton = () => {

    const calculate = () => {
        console.log("HOLAAAA");
    }


    return (
        <div className="d-grid gap-2">
            <Button variant="secondary" size="lg" onClick={calculate}>
                Calculate
            </Button>
        </div>
    )
}

export default BlockButton