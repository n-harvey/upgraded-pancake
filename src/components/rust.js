import React from "react";
import roster from "../JSONS/rosters.json";
import { Row, Col, Card, Button } from "react-bootstrap/";

const team = roster[1];

// Function for on button click to open the steam profile in a new tab

const openSteam = (steamid) => {
        window.open("https://steamcommunity.com/profiles/" + steamid, "_blank").focus();
};

const rust = () => {
        return (
                <>
                        <Row>
                                <h1>Getting Rusty</h1>
                        </Row>

                        <Row>
                                {team.players.map((player) => (
                                        <Col key={player.name}>
                                                <Card style={{ width: "12rem" }}>
                                                        <Card.Img variant="top" src={player.icon} />
                                                        <Card.Body>
                                                                <Card.Title>{player.name}</Card.Title>
                                                                <Card.Text>{player.role}</Card.Text>
                                                                <Button variant="primary" onClick={() => openSteam(player.steamid)}>
                                                                        Steam
                                                                </Button>
                                                        </Card.Body>
                                                </Card>
                                        </Col>
                                ))}
                        </Row>
                </>
        );
};

export default rust;
