import { Card, Container, Table } from "react-bootstrap";
import PHeader from "../components/PHeader"
import { useEffect, useState } from "react";
import axios from "axios";
import ip from "../ApiConfig";

const OrderMasterMaterials = () => {
  
    const [ ordermastermaterials, setOrderMasterMaterials ] = useState([])

    useEffect(
        () => {
            axios.get("http://"+ ip +":8089/api/report/order-master-materials").then(response => {
                setOrderMasterMaterials(response.data.children)
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
                    <h1 style={{textAlign: 'center'}}>Учет выполнения заказов</h1>
                    <Table style={{marginTop: '25px'}}>
                        <thead>
                            <tr style={{textAlign: 'center'}}>
                                <th>№</th>
                                <th>ФИО сотрудника</th>
                                <th>Материалы</th>
                            </tr>
                        </thead>
                        <tbody style={{textAlign: 'center'}}>
                                {ordermastermaterials.map((allinfo) => (
                                    <tr>
                                        <td>{allinfo.order_id}</td>
                                        <td>{allinfo.employee_total_name}</td>
                                        <td>
                                            {allinfo.materials.map((material) => (
                                                <p>{material}</p>
                                            ))}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Card>
            </Container>
        </>
    )
};

export default OrderMasterMaterials;