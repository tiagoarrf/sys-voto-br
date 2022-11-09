package com.tiago.sysvoto.sysvoto.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tiago.sysvoto.sysvoto.models.Eleicao;

@Repository
public interface EleicaoRepository extends JpaRepository<Eleicao, UUID> {
    
}
    

