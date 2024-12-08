import PHeader from "../components/PHeader"
import { Card, Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import ip from "../ApiConfig";

const Warehouse3 = () => {

    const [ warehouse3, setWarehouse3 ] = useState([])

    useEffect(
        () => {
            axios.get("http://"+ ip +":8089/api/material/all-by-warehouse?warehouse_id=3").then(response => {
                setWarehouse3(response.data.children)
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
                        <h1 style={{textAlign: 'center'}}>Склад №3</h1>
                        <Table style={{marginTop: '25px'}}>
                            <thead>
                                <tr style={{textAlign: 'center'}}>
                                    <th>№ товара</th>
                                    <th>Название материала</th>
                                    <th>Номер склада</th>
                                    <th>Колличество на складе</th>
                                </tr>
                            </thead>
                            <tbody style={{textAlign: 'center'}}>
                                {warehouse3.map((material) => (
                                    <tr>
                                        <td>{material.material_id}</td>
                                        <td>{material.name}</td>
                                        <td>№{material.warehouse_id}</td>
                                        <td>{material.count_in_warehouse} шт.</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card>
                </Container>
        </>
    )
};

export default Warehouse3;