import React from "react";
import styled from 'styled-components';
import { Dropdown } from 'react-bootstrap';

const Styles = styled.div `
    footer {
        position: fixed;
        display: flex;
        margin-left: -5%;
        margin-right: -5%;
        margin-top: 30px;
        background-color: #92140cff;
        border: 2px #C0C0C0;
        bottom: 0;
        height: 40px;
        line-height: 40px;
        width: 110%;

    }

    .container {
        margin-left: 10%;
    }
`



function Footer() {

    return (
        <>
        <Styles>
            <footer className="footer">
                <div className="container">
                <Dropdown className="dropup">
                    <Dropdown.Toggle className="dropup" variant="outline-dark" id="dropdown-drop-up">
                        Contributors
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="https://github.com/ccraig7321" target="_blank">Chelsey Craig</Dropdown.Item>
                        <Dropdown.Item href="https://github.com/AndrewbHall96" target="_blank">Andrew Hall</Dropdown.Item>
                        <Dropdown.Item href="https://github.com/Jchomer90" target="_blank">Joshua Homer</Dropdown.Item>
                        <Dropdown.Item href="https://github.com/Turtando" target="_blank">Chris Turton</Dropdown.Item>
                        <Dropdown.Item href="https://github.com/erasersleeve" target="_blank">Tim Winters</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
            </footer>
        </Styles>
        </>
    )
}

export default Footer;



