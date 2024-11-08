package edu.icet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class OrderDetail {
    private Integer id;
    private Integer itemId;
    private String name;
    private Double stock;
    private Double qty;
    private Double unitPrice;
    private Double totalPrice;
    private Integer orderId;
}
