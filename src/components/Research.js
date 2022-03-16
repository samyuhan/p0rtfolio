import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/Research.css';

function Research() {
    return (
        <div className="projs">
            <div className="eachproj"> 
                <Card style={{ width: '375px', height: '250px' }} bg='transparent' border='white'>
                    <Button className="projbtn">
                        <Card.Img variant="top" src="mockup.png" style={{ height: "11vw", objectFit: 'cover' }}/>
                    <Card.Body style={{ color: 'white' }}>
                        <Card.Title style={{ fontWeight: '800' }}>Face Washing</Card.Title>
                        <Card.Text>
                            Sample text
                        </Card.Text>
                    </Card.Body>
                    </Button>
                    
                </Card>
            </div>
            <div className="eachproj"> 
                <Card style={{ width: '375px', height: '250px' }} bg='transparent' border='white'>
                    <Card.Img variant="top" src="mockup.png" style={{ height: "11vw", objectFit: 'cover' }}/>
                    <Card.Body style={{ color: 'white' }}>
                        <Card.Title style={{ fontWeight: '800' }}>Mental Health @UC Berkeley</Card.Title>
                        <Card.Text>
                            Sample text
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="eachproj"> 
                <Card style={{ width: '375px', height: '250px' }} bg='transparent' border='white'>
                    <Card.Img variant="top" src="mockup.png" style={{ height: "11vw", objectFit: 'cover' }}/>
                    <Card.Body style={{ color: 'white' }}>
                        <Card.Title style={{ fontWeight: '800' }}>Fold-A-Bowl</Card.Title>
                        <Card.Text>
                            Sample text
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="eachproj"> 
                <Card style={{ width: '375px', height: '250px' }} bg='transparent' border='white'>
                    <Card.Img variant="top" src="mockup.png" style={{ height: "11vw", objectFit: 'cover' }}/>
                    <Card.Body style={{ color: 'white' }}>
                        <Card.Title style={{ fontWeight: '800' }}>Tamagacha</Card.Title>
                        <Card.Text>
                            Sample text
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="eachproj"> 
                <Card style={{ width: '375px', height: '250px' }} bg='transparent' border='white'>
                    <Card.Img variant="top" src="mockup.png" style={{ height: "11vw", objectFit: 'cover' }}/>
                    <Card.Body style={{ color: 'white' }}>
                        <Card.Title style={{ fontWeight: '800' }}>PokeBattler</Card.Title>
                        <Card.Text>
                            Sample text
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Research;