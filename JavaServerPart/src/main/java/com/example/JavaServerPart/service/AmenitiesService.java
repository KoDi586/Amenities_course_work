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
import com.example.JavaServerPart.dto.order.get.ChildrenOrderResponseDto;
import com.example.JavaServerPart.dto.order.get.ClientResponseDto;
import com.example.JavaServerPart.dto.order.get.ListAllOrderResponseDto;
import com.example.JavaServerPart.dto.order.post.ClientRequestDto;
import com.example.JavaServerPart.dto.order.post.CreateOrderRequestDto;
import com.example.JavaServerPart.dto.provider.AllProviderResponseDto;
import com.example.JavaServerPart.dto.provider.ChildrenProviderResponseDto;
import com.example.JavaServerPart.dto.report.money.AllMoveMoneyResponseDto;
import com.example.JavaServerPart.dto.report.money.ChildrenMoveMoneyResponseDto;
import com.example.JavaServerPart.dto.report.order_master_materials.AllOrderMasterAndMaterialsResponseDto;
import com.example.JavaServerPart.dto.report.order_master_materials.ChildrenOrderMasterAndMaterialsResponseDto;
import com.example.JavaServerPart.exception.PutOrderException;
import com.example.JavaServerPart.model.*;
import com.example.JavaServerPart.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;
import java.util.random.RandomGenerator;

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
    private final SalaryService salaryService;
    private static final String boughtMaterialMessage = "закупка материалов";

    public ListAllOrderResponseDto getNoPayOrder() {

        List<Order> orderList = orderRepository.findAll();

        List<ChildrenOrderResponseDto> children = new ArrayList<>();
        for (Order order : orderList) {
            if (order.getDateOfPayed() == null) {
                children.add(converterOrderModelToDto(order));
            }
        }

        return new ListAllOrderResponseDto(children);
    }

    private ChildrenOrderResponseDto converterOrderModelToDto(Order order) {
        Client client;
        try {
            client = clientRepository.findById(order.getClientId()).get();
        } catch (Exception e) {
            log.warn("error in client find by id in order: {}", order);
            return null;
        }
        ClientResponseDto clientResponseDto = converterClientModelToDto(client);
        List<Integer> amenitiesIds = order.getAmenitiesIds();
        return new ChildrenOrderResponseDto(
                order.getId(),
                clientResponseDto,
                findAmenitiesNamesByIdList(amenitiesIds),
                order.getStatus(),
                findEmployeeNameById(order.getEmployeeId()),
                order.getDateOfPayed(),
                order.getDateOfFinish(),
                order.getTotalPrice()
        );
    }

    private ClientResponseDto converterClientModelToDto(Client client) {
        return new ClientResponseDto(
                client.getName(),
                client.getSecondName(),
                client.getEmail(),
                client.getPhone(),
                client.getCard()
        );
    }

    private String findEmployeeNameById(Long employeeId) {
        String totalName = null;
        try {
            totalName = employeeRepository.findById(employeeId).get().getTotalName();
        } catch (Exception e) {
            log.warn("error in employee find by id");
            return null;
        }
        return totalName;
    }

    private List<String> findAmenitiesNamesByIdList(List<Integer> amenitiesIds) {
        List<String> result = new ArrayList<>();
        try {
            for (Integer amenitiesId : amenitiesIds) {
                result.add(amenitiesRepository.findById(amenitiesId.longValue()).get().getTitle());
            }
        } catch (Exception e) {
            log.warn("error in amenities find by id");
            return null;
        }
        return result;
    }

    public ListAllOrderResponseDto getNoFinishOrder() {
        List<Order> orderList = orderRepository.findAll();

        List<ChildrenOrderResponseDto> children = new ArrayList<>();
        for (Order order : orderList) {
            if (order.getDateOfPayed() != null && order.getDateOfFinish() == null) {
                children.add(converterOrderModelToDto(order));
            }
        }

        return new ListAllOrderResponseDto(children);
    }

    public ListAllOrderResponseDto getFinishOrder() {
        List<Order> orderList = orderRepository.findAll();

        List<ChildrenOrderResponseDto> children = new ArrayList<>();
        for (Order order : orderList) {
            if (order.getDateOfPayed() != null && order.getDateOfFinish() != null) {
                children.add(converterOrderModelToDto(order));
            }
        }

        return new ListAllOrderResponseDto(children);
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
        List<Amenities> amenitiesList = amenitiesRepository.findAll();
        List<ChildrenAmenitiesResponseDto> children = new ArrayList<>();
        for (Amenities amenities : amenitiesList) {
            children.add(converterAmenitiesModelToDto(amenities));
        }
        return new AllAmenitiesResponseDto(children);
    }

    private ChildrenAmenitiesResponseDto converterAmenitiesModelToDto(Amenities amenities) {
        String amenitiesType = "without";
        if (amenities.getType()) {
            amenitiesType = "with";
        }
        List<String> materialsNames = findMaterialsNamesByIdList(amenities.getMaterials());
        List<String> productNames = findProductsNamesByIdList(amenities.getProducts());

        return new ChildrenAmenitiesResponseDto(
                amenities.getId(),
                amenities.getTitle(),
                amenities.getDescription(),
                amenitiesType,
                materialsNames,
                productNames,
                amenities.getPrice()

        );
    }

    private List<String> findProductsNamesByIdList(Integer[] products) {
        if (products == null) {
            return null;
        }
        List<String> names = new ArrayList<>();
        for (Integer productId : products) {
            Product product = null;
            try {
                product = productRepository.findById(productId.longValue()).get();
            } catch (Exception e) {
                log.warn("error in material find by id");
            }
            try {
                names.add(product.getTitle());
            } catch (Exception e) {
                log.warn("error in material get tittle");
            }
        }
        return names;
    }

    public AllMaterialsResponseDto getAllWithoutParams() {

        List<Material> materialList = materialRepository.findAll();
        List<ChildrenMaterialResponseDto> children = new ArrayList<>();
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

        List<Material> materialList = materialRepository.findAllByWarehouseId(warehouseId);

        List<ChildrenMaterialResponseDto> children = new ArrayList<>();
        for (Material material : materialList) {
            children.add(converterMaterialModelToDto(material));
        }
        return new AllMaterialsResponseDto(children);
    }

    public AllProviderResponseDto getAllProvider() {
        List<ChildrenProviderResponseDto> children = new ArrayList<>();
        List<Provider> providerList = providerRepository.findAll();
        for (Provider provider : providerList) {
            children.add(converterProviderModelToDto(provider));
        }
        return new AllProviderResponseDto(children);
    }

    private ChildrenProviderResponseDto converterProviderModelToDto(Provider provider) {
        return new ChildrenProviderResponseDto(
                provider.getId(),
                provider.getName(),
                provider.getContactInfo()
        );
    }

    public AllOrderMasterAndMaterialsResponseDto getAllOrderMasterAndMaterialsResponseDto() {
        List<Order> orderList = orderRepository.findAll();
        List<ChildrenOrderMasterAndMaterialsResponseDto> children = new ArrayList<>();
        for (Order order : orderList) {
            children.add(createReportByOrderMasters(order));
        }
        return new AllOrderMasterAndMaterialsResponseDto(children);
    }

    private ChildrenOrderMasterAndMaterialsResponseDto createReportByOrderMasters(Order order) {
        String employeeName = employeeRepository.findById(order.getEmployeeId()).get().getTotalName();
        List<String> materialsNamesList = findMaterialsNamesByAmenitiesIds(order.getAmenitiesIds());
        return new ChildrenOrderMasterAndMaterialsResponseDto(
                order.getId(),
                employeeName,
                materialsNamesList
        );
    }

    private List<String> findMaterialsNamesByAmenitiesIds(List<Integer> amenitiesIds) {
        Set<String> result = new HashSet<>();
        for (Integer amenitiesId : amenitiesIds) {
            Amenities amenities;
            try {
                amenities = amenitiesRepository.findById(amenitiesId.longValue()).get();
            } catch (Exception e) {
                log.warn("error in amenities repository find by id");
                continue;
            }
            result.addAll(findMaterialsNamesByIdList(amenities.getMaterials()));
        }
        return result.stream().toList();
    }

    private List<String> findMaterialsNamesByIdList(Integer[] materials) {
        List<String> names = new ArrayList<>();
        for (Integer materialId : materials) {
            Material material = null;
            try {
                material = materialRepository.findById(materialId.longValue()).get();
            } catch (Exception e) {
                log.warn("error in material find by id");
            }
            try {
                names.add(material.getTitle());
            } catch (Exception e) {
                log.warn("error in material get tittle");
            }
        }
        return names;
    }

    public AllMoveMoneyResponseDto getReportByMoveMoney() {
        List<Order> orderList = orderRepository.findAll();
        List<MaterialTurnover> materialTurnoverList = materialTurnoverRepository.findAllByType(boughtMaterialMessage);
        List<ChildrenMoveMoneyResponseDto> children = new ArrayList<>();
        for (Order order : orderList) {
            children.add(createMoneyReportByOder(order));
        }
        for (MaterialTurnover materialTurnover : materialTurnoverList) {
            children.add(createMoneyReportByMaterialTurnover(materialTurnover));
        }
        Collections.shuffle(children);
        return new AllMoveMoneyResponseDto(children);
    }

    private ChildrenMoveMoneyResponseDto createMoneyReportByMaterialTurnover(MaterialTurnover materialTurnover) {
        String materialName;
        Integer materialPrice;
        try {
            materialName = materialRepository.findById(materialTurnover.getMaterialId()).get().getTitle();
            materialPrice = materialRepository.findById(materialTurnover.getMaterialId()).get().getPrice();
        } catch (Exception e) {
            log.warn("error in material repository");
            return null;
        }
        String providerName = null;
        try {
            providerName = providerRepository.findByMaterialId(materialTurnover.getMaterialId()).get().getName();
        } catch (Exception e) {
            log.warn("error in provider find by material id");
        }
        return new ChildrenMoveMoneyResponseDto(
                "material: " + materialName,
                providerName,
                materialTurnover.getCount() * materialPrice,
                materialTurnover.getType()
        );
    }

    private ChildrenMoveMoneyResponseDto createMoneyReportByOder(Order order) {
        String clientName = findClientTotalNameNameById(order.getClientId());
        return new ChildrenMoveMoneyResponseDto(
                "заказ номер " + order.getId(),
                clientName,
                order.getTotalPrice(),
                "выполнение заказа"
        );
    }

    private String findClientTotalNameNameById(Long clientId) {
        Client client = clientRepository.findById(clientId).get();
        return client.getName() + " " + client.getSecondName();
    }

    public AllEmployeeSalaryReportResponseDto getReportByEmployeeSalary() {
        List<ChildrenEmployeeSalaryReportResponseDto> children = new ArrayList<>();
        List<Employee> employeeList = employeeRepository.findAll();
        for (Employee employee : employeeList) {
            children.add(salaryService.createSalaryReportByEmployee(employee));
        }
        return new AllEmployeeSalaryReportResponseDto(children);
    }

    public void createBoughtMaterialsFromRandomProvider(CreateBoughtMaterialsRequestDto dto) {
        createMaterialTurnoverForMaterialBought(dto.getBought_materials());
        // создать отчет о закупке
        materialAddCountByBought(dto.getBought_materials());
        // добавить количество закупленных на склад
    }

    private void createMaterialTurnoverForMaterialBought(List<BoughtMaterialsRequestDto> boughtMaterials) {
        for (BoughtMaterialsRequestDto boughtMaterial : boughtMaterials) {
            MaterialTurnover materialTurnover = new MaterialTurnover(
                    materialTurnoverRepository.count() + 1,
                    boughtMaterial.getMaterial_id(),
                    boughtMaterial.getCount_of_bought(),
                    boughtMaterialMessage
            );
            materialTurnoverRepository.save(materialTurnover);
        }
    }

    private void materialAddCountByBought(List<BoughtMaterialsRequestDto> boughtMaterials) {
        for (BoughtMaterialsRequestDto boughtMaterial : boughtMaterials) {
            Material material = null;
            try {
                material = materialRepository.findById(boughtMaterial.getMaterial_id()).get();
            } catch (Exception e) {
                log.warn("error in material find by id");
            }
            if (material != null) {
                material.setCountOfWarehouse(
                        material.getCountOfWarehouse()
                                +
                                boughtMaterial.getCount_of_bought());
                try {
                    materialRepository.save(material);
                } catch (Exception e) {
                    log.warn("error in material save");
                }
            }

        }
    }

    public void orderPayingSetDate(Long orderId) {
        try {
            Order order = orderRepository.findById(orderId).get();
            order.setDateOfPayed(LocalDateTime.now().toString());
            order.setStatus("оплачен, в работе");
            orderRepository.save(order);
        } catch (Exception e) {
            log.warn("error in order repository methods paying");
            throw new PutOrderException("error");
        }
    }

    public void orderFinishingSetDate(Long orderId) {
        try {
            Order order = orderRepository.findById(orderId).get();
            order.setDateOfFinish(LocalDateTime.now().toString());
            order.setStatus("выполнен");
            orderRepository.save(order);

            finishWorkOrder(order);
        } catch (Exception e) {
            log.warn("error in order repository methods finishing");
            throw new PutOrderException("error");
        }
    }

    private void finishWorkOrder(Order order) {
        Map<Long, Integer> materialsIdsSpentCount = new HashMap<>();
        employeeCountWorkPlusOne(order.getEmployeeId());
        for (Integer amenitiesId : order.getAmenitiesIds()) {
            List<Long> materials = spentMaterialsByAmenitiesId(amenitiesId);
            for (Long materialId : materials) {   // добавляю в список для отчета по тратам материалов
                if (materialsIdsSpentCount.containsKey(materialId)) {
                    materialsIdsSpentCount.replace(materialId, materialsIdsSpentCount.get(materialId) + 1);
                } else {
                    materialsIdsSpentCount.put(materialId, 1);
                }
            }

        }
        materialTurnoverAddByMap(materialsIdsSpentCount);
    }

    private void materialTurnoverAddByMap(Map<Long, Integer> materialsIdsSpentCount) {
        for (Long materialId : materialsIdsSpentCount.keySet()) {
            MaterialTurnover materialTurnover = new MaterialTurnover();
            materialTurnover.setMaterialId(materialId);
            materialTurnover.setType("потраченно");
            materialTurnover.setCount(materialsIdsSpentCount.get(materialId));
        }
    }

    private List<Long> spentMaterialsByAmenitiesId(Integer amenitiesId) {
        // список для создания движения материалов
        List<Long> materialsIds = new ArrayList<>();

        try {
            Amenities amenities = amenitiesRepository.findById(amenitiesId.longValue()).get();
            for (Integer materialId : amenities.getMaterials()) {
                Material material = materialRepository.findById(materialId.longValue()).get();
                materialsIds.add(materialId.longValue());
                material.setCountOfWarehouse(material.getCountOfWarehouse() - 1);
                materialRepository.save(material);
            }
        } catch (Exception e) {
            log.warn("error in spent materials: {}", materialsIds);
            throw new PutOrderException("error");
        }
        return materialsIds;
    }

    private void employeeCountWorkPlusOne(Long employeeId) {
        try {
            Employee employee = employeeRepository.findById(employeeId).get();
            employee.setCountFinish(employee.getCountFinish() + 1);
            employeeRepository.save(employee);
        } catch (Exception e) {
            log.warn("error in set data in employee");
            throw new PutOrderException("error");
        }
    }

    public void postOrder(CreateOrderRequestDto dto) {
        Order order = new Order();
        List<Integer> amenitiesIds = converterAmenitiesNamesToIds(dto.getAmenities_names());
        order.setAmenitiesIds(amenitiesIds);

        Client client = converterClientDtoToModel(dto.getClient());

        try {
            client = clientRepository.save(client);
            order.setClientId(client.getId());
            order.setId(orderRepository.count() + 1);
            order.setStatus("не оплачен");
            order.setEmployeeId(randomByAllEmployees());  //рандомно выбрать из 10 сотрудников
            order.setTotalPrice(findTotalPriceFromAmenitiesIds(amenitiesIds)); //по услугам и их материалам
            orderRepository.save(order);

        } catch (Exception e) {
            throw new PutOrderException("error");
        }
    }

    private Integer findTotalPriceFromAmenitiesIds(List<Integer> amenitiesIds) {
        int totalPrice = 0;
        for (Integer amenitiesId : amenitiesIds) {
            Amenities amenities = amenitiesRepository.findById(amenitiesId.longValue()).get();
            totalPrice += amenities.getPrice() + findMaterialsPriceByAmenities(amenities);

        }
        return totalPrice;
    }

    private Integer findMaterialsPriceByAmenities(Amenities amenities) {
        Integer totalPrice = 0;
        Integer[] materialsIds = amenities.getMaterials();
        for (Integer materialsId : materialsIds) {
            Integer price;
            try {
                price = materialRepository.findById(materialsId.longValue()).get().getPrice();
            } catch (Exception e) {
                log.warn("error in material find by id");
                return 0;
            }
            totalPrice += price;
        }
        return totalPrice;
    }

    private Long randomByAllEmployees() {
        try {
            List<Long> employeesIdList = new ArrayList<>(employeeRepository.findAll().stream().map(Employee::getId).toList());
            Collections.shuffle(employeesIdList);
            return employeesIdList.getFirst();
        } catch (Exception e) {
            return 0L;
        }
    }

    private Client converterClientDtoToModel(ClientRequestDto dto) {
        Client client;
        try {
            client = clientRepository.findByEmail(dto.getEmail()).get();

        } catch (Exception e) {
            long count = clientRepository.count() + 1;
            client = new Client();
            client.setId(count);
            client.setName(dto.getName());
            client.setSecondName(dto.getSecond_name());
            client.setEmail(dto.getEmail());
            client.setPhone(dto.getPhone());
            client.setCard(dto.getCard());
        }

        return client;
    }

    private List<Integer> converterAmenitiesNamesToIds(String[] amenitiesNames) {
        List<Integer> result = new ArrayList<>();
        for (String amenitiesName : amenitiesNames) {
            result.add(amenitiesRepository.findByTitle(amenitiesName).getId().intValue());

        }
        return result;
    }
}
