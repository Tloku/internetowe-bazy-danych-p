package pl.edu.pwr.gymplanserver.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.edu.pwr.gymplanserver.gym_user.model.GymUser;
import pl.edu.pwr.gymplanserver.gym_user.repository.GymUserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    GymUserRepository gymUserRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        GymUser gymUser = gymUserRepository.findByLogin(login)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with login: " + login));

        return UserDetailsImpl.build(gymUser);
    }
}
