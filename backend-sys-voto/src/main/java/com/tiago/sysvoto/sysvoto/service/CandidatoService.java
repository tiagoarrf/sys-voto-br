package com.tiago.sysvoto.sysvoto.service;

import java.util.List;
import java.util.UUID;

import com.tiago.sysvoto.sysvoto.models.Candidato;

public interface CandidatoService {
    List<Candidato> findAll();

    Candidato findById(UUID id);

    Candidato save(Candidato candidato);

    Candidato update(Candidato candidato);

    Candidato delete(Candidato candidato);

    List<Candidato> deleteAll();
}
