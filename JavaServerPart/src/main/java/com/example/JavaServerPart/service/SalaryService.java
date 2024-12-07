package com.example.JavaServerPart.service;

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
        forSalary.put(Position.junior, 40_000);
        forSalary.put(Position.middle, 50_000);
        forSalary.put(Position.senior, 60_000);
    }

    public Integer createSalaryByCountAndPosition(Integer countWork, String position) {
        Position position1 = Position.valueOf(position);
        return forSalary.get(position1);
    }

}
