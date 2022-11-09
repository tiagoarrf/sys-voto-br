package com.tiago.sysvoto.sysvoto.service;

import java.util.List;
import java.util.UUID;

import com.tiago.sysvoto.sysvoto.models.Eleicao;

public interface EleicaoService {
    List<Eleicao> findAll();

    Eleicao findById(UUID id);

    Eleicao save(Eleicao Eleicao);

    Eleicao update(Eleicao Eleicao);

    Eleicao delete(Eleicao Eleicao);

    List<Eleicao> deleteAll();
}
