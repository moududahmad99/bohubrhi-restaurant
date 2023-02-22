import React from 'react'
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItem = props => {

    console.log(props);

    return (
        <>
            <Card style={{margin: '39px '}}>
                <CardBody>
                    <CardImg style={{opacity: '0.5'}} width="100%" alt={props.dish.name} src={props.dish.image}/> 
                    <CardImgOverlay>
                        <CardTitle>{props.dish.foodName}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </>
    )
}

export default MenuItem