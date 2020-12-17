package ru.kolesnikov.autosales.data.dto.simple;

import lombok.*;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class SimpleUserDto {

    private Long id;
    private Long typeId;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String phone;
    private String email;
}
