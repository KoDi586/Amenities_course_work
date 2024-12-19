import { Card, Container, Table } from "react-bootstrap";
import PHeader from "../components/PHeader"
import { useEffect, useState } from "react";
import axios from "axios";
import ip from "../ApiConfig";


const Providers = () => {

    const [ providers, setProviders ] = useState([])

    useEffect(
        () => {
            axios.get("http://"+ ip +":8089/api/provider/all").then(response => {
                setProviders(response.data.children)
            }).catch(error => {
                console.log(error);
            });
        }, []
    )

    return (
        <>
            <PHeader/>
            <Container style={{marginTop: '80px'}}>
                <Card style={{padding:'25px'}}>
                    <h1 style={{textAlign: 'center'}}>Поставщики</h1>
                    <Table style={{marginTop: '25px'}}>
                        <thead>
                            <tr style={{textAlign: 'center'}}>
                                <th>№</th>
                                <th>Название</th>
                                <th>Контактная информация</th>
                            </tr>
                        </thead>
                        <tbody style={{textAlign: 'center'}}>
                                {providers.map((provider) => (
                                    <tr>
                                        <td>{provider.id}</td>
                                        <td>{provider.name}</td>
                                        <td>{provider.contact_info}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Card>
            </Container>
        </>
    )
};

export default Providers;