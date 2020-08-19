import React, { useEffect, useState } from "react";
import { Row, Container } from "../../components/Grid";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button, Modal, Col } from 'react-bootstrap';
import Form from "../../components/Form";
import MapContainer from "./MapContainer";
import GoogleHeatMap from "../../components/GoogleHeatMap";
// import MapsModal from "../../components/Modul";
import API from "../../utils/API";

function Map(props) {
    const [lgShow, setShow] = useState(false);
    const [latLng, setLatLng] = useState({ lat: 39.9526, lng: -75.1652 });
    const [badExperienceData, setBadExperienceData] = useState([
        {
            description: "stuff",
            experience: "bad",
            badgeNumber: 123,
            // file: form.get('file'),
            lat: 39.985858621546505,
            lng: -75.15346630901078,
        },
        {
            description: "stuff",
            experience: "bad",
            badgeNumber: 123,
            // file: form.get('file'),
            lat: 40.005858621546505,
            lng: -75.18346630901078,
        },
        {
            description: "stuff",
            experience: "bad",
            badgeNumber: 123,
            // file: form.get('file'),
            lat: 39.905858621546505,
            lng: -75.10346630901078,
        },
        {
            description: "stuff",
            experience: "bad",
            badgeNumber: 123,
            // file: form.get('file'),
            lat: 39.995858621546505,
            lng: -75.10346630901078,
        },
        {
            description: "stuff",
            experience: "bad",
            badgeNumber: 123,
            // file: form.get('file'),
            lat: 39.905858621546505,
            lng: -75.15346630901078,
        },
        {
            description: "stuff",
            experience: "bad",
            badgeNumber: 123,
            // file: form.get('file'),
            lat: 39.995858621546505,
            lng: -75.16346630901078,
        },
        {
            description: "stuff",
            experience: "bad",
            badgeNumber: 123,
            // file: form.get('file'),
            lat: 39.995858621546505,
            lng: -75.14346630901078,
        },
    ]);

    const [goodExperienceData, setGoodExperienceData] = useState([
        {
            description: "stuff",
            experience: "good",
            badgeNumber: 123,
            // file: form.get('file'),
            lat: 39.9926,
            lng: -75.1052,
        },
        {
            description: "stuff",
            experience: "good",
            badgeNumber: 123,
            // file: form.get('file'),
            lat: 39.8926,
            lng: -75.2252,
        },
        {
            description: "stuff",
            experience: "good",
            badgeNumber: 123,
            // file: form.get('file'),
            lat: 39.9626,
            lng: -75.1352,
        },
        {
            description: "stuff",
            experience: "good",
            badgeNumber: 123,
            // file: form.get('file'),
            lat: 39.9654,
            lng: -75.1759,
        },
        {
            description: "stuff",
            experience: "good",
            badgeNumber: 123,
            // file: form.get('file'),
            lat: 39.9916,
            lng: -75.1965,
        },
        {
            description: "stuff",
            experience: "good",
            badgeNumber: 123,
            // file: form.get('file'),
            lat: 39.9525,
            lng: -75.1654,
        },
    ]);

    const getLatLng = (coordinates) => {
        setLatLng(coordinates.latLng.toJSON());
    };

    const updateData = () => {
        // get data for google heatmaps
        // and store in good/badExperienceData
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const data = {
            description: form.get('description'),
            experience: form.get('experience'),
            badgeNumber: form.get('badge'),
            // file: form.get('file'),
            lat: latLng.lat,
            lng: latLng.lng,
            date: new Date
        };

        const body = {
            data: data,
            //update with real user id
            id: props.userId
        }
        // Ajax call
        console.log("THIS IS DATA :)")
        console.log(data);
        API.savePost(body).then(response => {
            setShow(false);
            props.setRedirect("/home")
            console.log("Save Post", response)
        }).catch(err => {
            console.log(err)
        });
        // API.savePost(data).then(response => {
        //     console.log(response)
        // });

        // updateData(); cc not sure if we need this or not
    };
    return (
        <Container fluid>
        {props.renderRedirect()}
        <NavBar handleLogout={props.handleLogout}/>
            <Row>
                <Button onClick={() => setShow(true)}>Submit Incident</Button>
            </Row>
            <Row>
                <Col><GoogleHeatMap ratingData={goodExperienceData} /></Col>
                <Col><GoogleHeatMap ratingData={badExperienceData} /></Col>
            </Row>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Incident Report
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <MapContainer clicked={(target, map, coordinates) => { getLatLng(coordinates) }} positions={latLng} /> */}
                    <Form clicked={(target, map, coordinates) => { getLatLng(coordinates) }} positions={latLng} submit={e => { handleSubmit(e) }} />
                    {/* <MapContainer /> */}
                </Modal.Body>
            </Modal>
            {/* <Container> */}
            {/* </Container> */}
            <Footer />
        </Container>
    )
}
export default Map;
