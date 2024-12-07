package com.example.JavaServerPart.service;

import com.example.JavaServerPart.dto.amenities.AllAmenitiesResponseDto;
import com.example.JavaServerPart.dto.amenities.ChildrenAmenitiesResponseDto;
import com.example.JavaServerPart.dto.employee.get.AllEmployeesResponseDto;
import com.example.JavaServerPart.dto.employee.get.ChildrenEmployeeResponseDto;
import com.example.JavaServerPart.dto.employee.salary.AllEmployeeSalaryReportResponseDto;
import com.example.JavaServerPart.dto.employee.salary.ChildrenEmployeeSalaryReportResponseDto;
import com.example.JavaServerPart.dto.materials.get.AllMaterialsResponseDto;
import com.example.JavaServerPart.dto.materials.get.ChildrenMaterialResponseDto;
import com.example.JavaServerPart.dto.materials.put.BoughtMaterialsRequestDto;
import com.example.JavaServerPart.dto.materials.put.CreateBoughtMaterialsRequestDto;
import com.example.JavaServerPart.dto.order.get.ChildrenAllOrderResponseDto;
import com.example.JavaServerPart.dto.order.get.ClientResponseDto;
import com.example.JavaServerPart.dto.order.get.ListAllOrderResponseDto;
import com.example.JavaServerPart.dto.provider.AllProviderResponseDto;
import com.example.JavaServerPart.dto.provider.ChildrenProviderResponseDto;
import com.example.JavaServerPart.dto.report.money.AllMoveMoneyResponseDto;
import com.example.JavaServerPart.dto.report.money.ChildrenMoveMoneyResponseDto;
import com.example.JavaServerPart.dto.report.order_master_materials.AllOrderMasterAndMaterialsResponseDto;
import com.example.JavaServerPart.dto.report.order_master_materials.ChildrenOrderMasterAndMaterialsResponseDto;
import com.example.JavaServerPart.model.Employee;
import com.example.JavaServerPart.model.Material;
import com.example.JavaServerPart.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class AmenitiesService {
    //repositories
    private final AmenitiesRepository amenitiesRepository;
    private final ClientRepository clientRepository;
    private final EmployeeRepository employeeRepository;
    private final MaterialRepository materialRepository;
    private final MaterialTurnoverRepository materialTurnoverRepository;
    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final ProviderRepository providerRepository;
    private final ProviderOrderRepository providerOrderRepository;

    public ListAllOrderResponseDto getNoPayOrder() {
        return new ListAllOrderResponseDto(List.of(new ChildrenAllOrderResponseDto(
                1L,
                new ClientResponseDto(
                        "name",
                        "secondName",
                        "email",
                        "phone",
                        "card"
                ),
                new String[]{"amenities_name_1", "amenities_name_2"},
                "status",
                "employee_name",
                "date_of_payed",
                "date_of_finished",
                1_000
        )));
    }

    public ListAllOrderResponseDto getNoFinishOrder() {
        return new ListAllOrderResponseDto(List.of(new ChildrenAllOrderResponseDto(
                1L,
                new ClientResponseDto(
                        "name",
                        "secondName",
                        "email",
                        "phone",
                        "card"
                ),
                new String[]{"amenities_name_1", "amenities_name_2"},
                "status",
                "employee_name",
                "date_of_payed",
                "date_of_finished",
                1_000
        )));
    }

    public ListAllOrderResponseDto getFinishOrder() {
        return new ListAllOrderResponseDto(List.of(new ChildrenAllOrderResponseDto(
                1L,
                new ClientResponseDto(
                        "name",
                        "secondName",
                        "email",
                        "phone",
                        "card"
                ),
                new String[]{"amenities_name_1", "amenities_name_2"},
                "status",
                "employee_name",
                "date_of_payed",
                "date_of_finished",
                1_000
        )));
    }

    public AllEmployeesResponseDto getAllEmployee() {
        List<Employee> employeeList = employeeRepository.findAll();

        employeeList.sort((e1, e2) -> e2.getCountFinish().compareTo(e1.getCountFinish()));

        List<ChildrenEmployeeResponseDto> children = new ArrayList<>();
        for (Employee employee : employeeList) {
            children.add(converterEmployeeModelToDto(employee));
        }

        return new AllEmployeesResponseDto(children);
    }

    private ChildrenEmployeeResponseDto converterEmployeeModelToDto(Employee employee) {
        return new ChildrenEmployeeResponseDto(
                employee.getId(),
                employee.getTotalName(),
                employee.getContactInfo(),
                employee.getPosition(),
                employee.getSalary()
        );
    }

    public AllAmenitiesResponseDto getAllAmenities() {
        return new AllAmenitiesResponseDto(
                List.of(
                        new ChildrenAmenitiesResponseDto(
                                2L,
                                "name1",
                                "description",
                                "without_product",
                                new String[]{"mat1", "mat2"},
                                new String[]{"product2", "product4"},
                                3_000
                        ),
                        new ChildrenAmenitiesResponseDto(
                                2L,
                                "name2",
                                "description",
                                "without_product",
                                new String[]{"mat1", "mat2"},
                                new String[]{"product2", "product4"},
                                3_000
                        )
                )
        );
    }

    public AllMaterialsResponseDto getAllWithoutParams() {

        List<Material> materialList = materialRepository.findAll();
        List <ChildrenMaterialResponseDto> children = new ArrayList<>();
        for (Material material : materialList) {
            children.add(converterMaterialModelToDto(material));
        }
        return new AllMaterialsResponseDto(children);
    }

    private ChildrenMaterialResponseDto converterMaterialModelToDto(Material material) {
        return new ChildrenMaterialResponseDto(
                material.getId(),
                material.getTitle(),
                material.getWarehouseId(),
                material.getCountOfWarehouse()
        );
    }

    public AllMaterialsResponseDto getAllByWarehouseId(Long warehouseId) {
        return new AllMaterialsResponseDto(
                List.of(
                        new ChildrenMaterialResponseDto(
                                2L,
                                "name1",
                                3L,

                                3_000
                        ),
                        new ChildrenMaterialResponseDto(
                                1L,
                                "name1",
                                2L,

                                3_000
                        )
                )
        );
    }

    public AllProviderResponseDto getAllProvider() {

        return new AllProviderResponseDto(
                List.of(
                        new ChildrenProviderResponseDto(
                                2L,
                                "name1",
                                "contact"
                        ),
                        new ChildrenProviderResponseDto(
                                2L,
                                "name2",
                                "contact________+7"
                        )
                )
        );

    }

    public AllOrderMasterAndMaterialsResponseDto getAllOrderMasterAndMaterialsResponseDto() {
        return new AllOrderMasterAndMaterialsResponseDto(
                List.of(
                        new ChildrenOrderMasterAndMaterialsResponseDto(
                                2L,
                                "total_name1",
                                List.of("mat1", "mat2")
                        ),
                        new ChildrenOrderMasterAndMaterialsResponseDto(
                                2L,
                                "total_name2",
                                List.of("mat1", "mat2")
                        )
                )
        );
    }

    public AllMoveMoneyResponseDto getReportByMoveMoney() {

        return new AllMoveMoneyResponseDto(
                List.of(
                        new ChildrenMoveMoneyResponseDto(
                                "material",
                                "oleg",
                                30_000,
                                "закупка"
                        ),
                        new ChildrenMoveMoneyResponseDto(
                                "order_228",
                                "murat",
                                10_000,
                                "продажа"
                        )
                )
        );
    }

    public AllEmployeeSalaryReportResponseDto getReportByEmployeeSalary() {
        return new AllEmployeeSalaryReportResponseDto(
                List.of(
                        new ChildrenEmployeeSalaryReportResponseDto(
                                23L,
                                "ivan ivanov",
                                "junior",
                                40_000,
                                12,
                                17,
                                50_000,
                                47_987
                        ),
                        new ChildrenEmployeeSalaryReportResponseDto(
                                23564L,
                                "moskovchuck filip",
                                "intern",
                                5_000,
                                3,
                                17,
                                5_500,
                                4_787
                        )
                )
        );
    }


    public void createBoughtMaterialsFromRandomProvider(CreateBoughtMaterialsRequestDto dto) {

    }
}
