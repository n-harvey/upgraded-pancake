import React from "react";
import gameslist from "../JSONS/games.json";
import { Row, Col } from "react-bootstrap/";

const games = () => {
        return (
                <>
                        <Row className="text-center">
                                {gameslist.map((game) => (
                                        <Col key={game.name}>
                                                <div className="game" key={game.name}>
                                                        <a href={game.link}>
                                                                <img src={game.logo} alt={game.name} />
                                                        </a>
                                                </div>
                                        </Col>
                                ))}
                        </Row>
                </>
        );
};

export default games;
