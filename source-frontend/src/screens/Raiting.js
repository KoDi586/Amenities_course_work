import PHeader from "../components/PHeader";
import { Card, Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import ip from "../ApiConfig";

const Raiting = () => {

    const [ raiting, setRaiting ] = useState([])

    useEffect(
        () => {
            axios.get("http://"+ ip +":8089/api/employee/all").then(response => {
                setRaiting(response.data.children)
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
                        <h1 style={{textAlign: 'center'}}>Рейтинг сотрудников</h1>
                        <Table style={{marginTop: '25px'}}>
                            <thead>
                                <tr style={{textAlign: 'center'}}>
                                    <th>Место</th>
                                    <th>ФИО сотрудника</th>
                                    <th>Контактная информация</th>
                                    <th>Должность</th>
                                    <th>Оклад</th>
                                </tr>
                            </thead>
                            <tbody style={{textAlign: 'center'}}>
                                {raiting.map((rat, key) => (
                                    <tr>
                                        <td>{key + 1}</td>
                                        <td>{rat.total_name}</td>
                                        <td>{rat.contact_info}</td>
                                        <td>{rat.position}</td>
                                        <td>{rat.salary} р.</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card>
                </Container>
        </>
    )
};

export default Raiting;