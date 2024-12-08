package com.example.JavaServerPart.service;

import com.example.JavaServerPart.dto.employee.salary.ChildrenEmployeeSalaryReportResponseDto;
import com.example.JavaServerPart.model.Employee;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class SalaryService {

    public enum Position{
        junior,
        middle,
        senior
    }

    Map<Position, Integer> forSalary = new HashMap<>();

    @PostConstruct
    private void init() {
        forSalary.put(Position.junior, 20);
        forSalary.put(Position.middle, 15);
        forSalary.put(Position.senior, 4);
    }

    public ChildrenEmployeeSalaryReportResponseDto createSalaryReportByEmployee(Employee employee) {
        Integer countWork = employee.getCountFinish();
        String position = employee.getPosition();
        Position position1 = Position.valueOf(position);
        Integer premium = 0;
        if (employee.getCountFinish() >= forSalary.get(position1)) {
            premium = 10_000;
        }

        int totalSalary = employee.getSalary() + premium;
        return new ChildrenEmployeeSalaryReportResponseDto(
                employee.getId(),
                employee.getTotalName(),
                employee.getPosition(),
                employee.getSalary(),
                employee.getCountFinish(),
                17,
                totalSalary,
                (int) (totalSalary * 0.83f)
        );
    }

}
