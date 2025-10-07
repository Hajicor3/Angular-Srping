package com.hajiApi.spbt.config;

import com.hajiApi.spbt.entities.Client;
import com.hajiApi.spbt.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class TestConfiguration implements CommandLineRunner {

    @Autowired
    private ClientRepository repository;

    @Override
    public void run(String... args) throws Exception {

        var c1 = new Client("Gabriel", "gabriel@gmail.com","123456789","(99) 99999-9999");
        var c2 = new Client("joao", "joao@gmail.com","123456789","(99) 99999-9999");
        var c3 = new Client("Joana", "joana@gmail.com","123456789","(99) 99999-9999");
        var c4 = new Client("Bernardo", "bernardo@gmail.com","123456789","(99) 99999-9999");



        repository.saveAll(Arrays.asList(c1, c2, c3, c4));
    }
}
