package com.tiago.sysvoto.sysvoto.service.impl;

import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import com.tiago.sysvoto.sysvoto.models.Eleicao;
import com.tiago.sysvoto.sysvoto.repository.EleicaoRepository;
import com.tiago.sysvoto.sysvoto.service.EleicaoService;

@Service
public class EleicaoServiceImpl implements EleicaoService {

    @Autowired
    private EleicaoRepository eleicaoRepository;

    @Override
    public List<Eleicao> findAll() {
        return eleicaoRepository.findAll();
    }

    @Override
    public Eleicao save(Eleicao eleicao) {
        return eleicaoRepository.save(eleicao);
    }

    @Override
    public Eleicao update(Eleicao eleicao) {
        if (eleicaoRepository.findById(eleicao.getEleicaoId()) != null) {
            return eleicaoRepository.save(eleicao);
        } else {
            return null;
        }
    }

    @Override
    public Eleicao delete(Eleicao eleicao) {
        if (eleicaoRepository.findById(eleicao.getEleicaoId()) != null) {
            eleicaoRepository.delete(eleicao);
            return eleicao;
        } else {
            return eleicao;
        }
    }

    @Override
    public Eleicao findById(@Validated UUID id) {
        return eleicaoRepository.findById(id).orElse(null);
    }

    @Override
    public List<Eleicao> deleteAll() {
        List<Eleicao> eleicaosRemoved = eleicaoRepository.findAll();
        if (!eleicaosRemoved.isEmpty()) {
            for (Eleicao element : eleicaosRemoved) {
                delete(element);
            }
            return eleicaosRemoved;

        } else {
            return eleicaosRemoved;
        }
    }

}
