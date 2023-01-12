import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

import valheim from "../Images/valheim.jpg";
import zomboid from "../Images/zomboid.jpg"

const servers = () => {
        return (
                <>
                        <Row>
                                <Col className="text-center">
                                        <h1>Deagle Boiz Servers</h1>
                                </Col>
                        </Row>
                        <Row>
                                <Col>
                                        <iframe
                                                title="Discord Server"
                                                src="https://discord.com/widget?id=410157137306714113&theme=dark"
                                                width="auto"
                                                height="500"
                                                allowtransparency="true"
                                                frameborder="0"
                                                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                                        ></iframe>
                                </Col>
                                <Col>
                                        <Card style={{ width: "12rem" }}>
                                                <Card.Img variant="top" src={valheim} />
                                                <Card.Body>
                                                        <Card.Title>Valheim</Card.Title>
                                                        <Card.Text>The Valheim Server</Card.Text>
                                                        <Card.Text>70.178.35.67:1127</Card.Text>
                                                        <Button variant="primary" href="steam://connect/70.178.35.67:1127">Join</Button>
                                                </Card.Body>
                                        </Card>
                                </Col>
                                <Col>
                                        <Card style={{ width: "12rem" }}>
                                                <Card.Img variant="top" src={zomboid} />
                                                <Card.Body>
                                                        <Card.Title>Project Zomboid</Card.Title>
                                                        <Card.Text>The Zomboid Server</Card.Text>
                                                        <Card.Text>IP to be decided</Card.Text>
                                                        <Button variant="primary" href="steam://connect/ip">Join</Button>
                                                </Card.Body>
                                        </Card>
                                </Col>
                                
                        </Row>
                </>
        );
};

export default servers;
