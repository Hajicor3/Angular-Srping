package com.hajiApi.spbt.controllers;

import com.hajiApi.spbt.entities.Client;
import com.hajiApi.spbt.repositories.ClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/clients")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ClientController {

    private final ClientRepository repository;

    @PostMapping
    public ResponseEntity<Client> createCliente(@RequestBody Client client){
        var response = repository.save(client);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("{id}").buildAndExpand(response.getId()).toUri();

        return ResponseEntity.created(uri).body(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Client> getClient(@PathVariable Long id){
        var response = repository.findById(id).orElseThrow(RuntimeException::new);

        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<Client>> getAllClients(){
        var response = repository.findAll();

        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable Long id, @RequestBody Client updatedClient){
        var client = repository.getReferenceById(id);
        updateData(updatedClient, client);
        repository.save(client);

        return ResponseEntity.ok(client);
    }

    private void updateData(Client updatedClient, Client oldClient){
        oldClient.setName(updatedClient.getName());
        oldClient.setEmail(updatedClient.getEmail());
        oldClient.setPassword(updatedClient.getPassword());
        oldClient.setPhoneNumber(updatedClient.getPhoneNumber());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClient(@PathVariable Long id){
        repository.deleteById(id);

        return ResponseEntity.noContent().build();
    }
}
