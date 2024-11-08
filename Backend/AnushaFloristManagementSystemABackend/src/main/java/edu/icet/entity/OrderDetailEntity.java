package edu.icet.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "orderDetail")

public class OrderDetailEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer itemId;
    private String name;
    private Double stock;
    private Double qty;
    private Double unitPrice;
    private Double totalPrice;
    private Integer orderId;
}

