package com.tiago.sysvoto.sysvoto.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tiago.sysvoto.sysvoto.models.Candidato;

@Repository
public interface CandidatoRepository extends JpaRepository<Candidato, UUID> {
    
}
