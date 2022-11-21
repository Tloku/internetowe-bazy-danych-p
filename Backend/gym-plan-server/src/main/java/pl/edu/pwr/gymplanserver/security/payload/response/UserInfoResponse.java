package pl.edu.pwr.gymplanserver.security.payload.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserInfoResponse {

    private Long id;
    private String username;
    private String email;

    public UserInfoResponse(Long id, String username, String email) {
        this.id = id;
        this.username = username;
        this.email = email;
    }
}