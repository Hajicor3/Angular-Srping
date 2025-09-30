package com.hajiApi.spbt.repositories;

import com.hajiApi.spbt.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
