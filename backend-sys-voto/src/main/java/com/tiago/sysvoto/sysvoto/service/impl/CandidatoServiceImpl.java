package com.tiago.sysvoto.sysvoto.service.impl;

import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import com.tiago.sysvoto.sysvoto.models.Candidato;
import com.tiago.sysvoto.sysvoto.repository.CandidatoRepository;
import com.tiago.sysvoto.sysvoto.service.CandidatoService;

@Service
public class CandidatoServiceImpl implements CandidatoService {

    @Autowired
    private CandidatoRepository candidatoRepository;

    @Override
    public List<Candidato> findAll() {
        return candidatoRepository.findAll();
    }

    @Override
    public Candidato save(Candidato candidato) {
        return candidatoRepository.save(candidato);
    }

    @Override
    public Candidato update(Candidato candidato) {
        if (candidatoRepository.findById(candidato.getCandidatoId()) != null) {
            return candidatoRepository.save(candidato);
        } else {
            return null;
        }
    }

    @Override
    public Candidato delete(Candidato candidato) {
        if (candidatoRepository.findById(candidato.getCandidatoId()) != null) {
            candidatoRepository.delete(candidato);
            return candidato;
        } else {
            return candidato;
        }
    }

    @Override
    public Candidato findById(@Validated UUID id) {
        return candidatoRepository.findById(id).orElse(null);
    }

    @Override
    public List<Candidato> deleteAll() {
        List<Candidato> candidatosRemoved = candidatoRepository.findAll();
        if (!candidatosRemoved.isEmpty()) {
            for (Candidato element : candidatosRemoved) {
                delete(element);
            }
            return candidatosRemoved;

        } else {
            return candidatosRemoved;
        }
    }

}
