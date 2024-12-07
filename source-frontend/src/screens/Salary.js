import { Card, Container, Table } from "react-bootstrap";
import PHeader from "../components/PHeader"
import { useEffect, useState } from "react";
import axios from "axios";
import ip from "../ApiConfig";

const Salary = () => {
    const [ salary, setSalary ] = useState([])

    useEffect(
        () => {
            axios.get("http://"+ ip +":8089 api/employee/report-by-salary").then(response => {
                setSalary(response.data.children)
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
                    <h1 style={{textAlign: 'center'}}>Начисление и выплата заработной платы</h1>
                    <Table style={{marginTop: '25px'}}>
                        <thead>
                            <tr style={{textAlign: 'center'}}>
                                <th>№</th>
                                <th>ФИО сотрудника</th>
                                <th>Должность</th>
                                <th>Ставка</th>
                                <th>Количество выполненых заказов</th>
                                <th>Начисление</th>
                                <th>Выплата</th>
                                <th>НДФЛ</th>
                            </tr>
                        </thead>
                        <tbody style={{textAlign: 'center'}}>
                                {salary.map((salarys) => (
                                    <tr>
                                        <td>{salarys.employee_id}</td>
                                        <td>{salarys.total_name}</td>
                                        <td>{salarys.position}</td>
                                        <td>{salarys.salary}</td>
                                        <td>{salarys.count_finish_work}</td>
                                        <td>{salarys.total_salary}</td>
                                        <td>{salarys.last_finish_salary}</td>
                                        <td>{salarys.ndfl_percent}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Card>
            </Container>
        </>
    )
}

export default Salary;