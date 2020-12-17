package ru.kolesnikov.autosales.data.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class UserDto {

    private Long id;
    private ReferenceDataDto type;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String phone;
    private String email;
}
