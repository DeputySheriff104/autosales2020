package ru.kolesnikov.autosales.data.entity;

import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Entity
@Table(name = "users", schema = "public")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="type_id")
    private UserType type;

    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String phone;
    private String email;
}
