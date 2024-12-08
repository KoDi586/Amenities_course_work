import { Card, Container, Table } from "react-bootstrap";
import PHeader from "../components/PHeader"
import { useEffect, useState } from "react";
import axios from "axios";
import ip from "../ApiConfig";

const MoveMoney = () => {

    const [ movemoney, setMoveMoney ] = useState([])

    useEffect(
        () => {
            axios.get("http://"+ ip +":8089/api/report/move-money").then(response => {
                setMoveMoney(response.data.children)
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
                    <h1 style={{textAlign: 'center'}}>Отчет по движению денежных средств</h1>
                    <Table style={{marginTop: '25px'}}>
                        <thead>
                            <tr style={{textAlign: 'center'}}>
                                <th>№</th>
                                <th>Материал</th>
                                <th>Сотрудник</th>
                                <th>Цена</th>
                                <th>Закупка или продажа</th>
                            </tr>
                        </thead>
                        <tbody style={{textAlign: 'center'}}>
                                {movemoney.map((money, key) => (
                                    <tr>
                                        <td>{key}</td>
                                        <td>{money.thing}</td>
                                        <td>{money.person}</td>
                                        <td>{money.price} р.</td>
                                        <td>{money.type}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Card>
            </Container>
        </>
    )
};

export default MoveMoney;