package pl.edu.pwr.gymplanserver.gym_user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.edu.pwr.gymplanserver.gym_user.model.GymUser;

@Repository
public interface GymUserRepository extends JpaRepository<GymUser, Integer> {
}
