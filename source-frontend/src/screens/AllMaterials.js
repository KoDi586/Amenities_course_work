import PHeader from "../components/PHeader"
import { Card, Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import ip from "../ApiConfig";

const AllMaterials = () => {

    const [ allmaterials, setAllMaterials ] = useState([])

    useEffect(
        () => {
            axios.get("http://"+ ip +":8089/api/material/all").then(response => {
                setAllMaterials(response.data.children)
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
                        <h1 style={{textAlign: 'center'}}>Все склады и все материалы</h1>
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
                                {allmaterials.map((material) => (
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

export default AllMaterials;