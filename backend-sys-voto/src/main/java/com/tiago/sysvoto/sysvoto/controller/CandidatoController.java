package com.tiago.sysvoto.sysvoto.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.tiago.sysvoto.sysvoto.models.Candidato;
import com.tiago.sysvoto.sysvoto.models.Eleicao;
import com.tiago.sysvoto.sysvoto.service.CandidatoService;
import com.tiago.sysvoto.sysvoto.service.EleicaoService;

@CrossOrigin
@RestController
public class CandidatoController {

    @Autowired
    CandidatoService candidatoService;

    @Autowired
    EleicaoService eleicaoService;

    @GetMapping("/candidato/find-all")
    public ResponseEntity<Object> find() {
        if (candidatoService.findAll().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Sem candidatos cadastrados");
        } else
            return new ResponseEntity<>(candidatoService.findAll(), HttpStatus.OK);
    }

    @PostMapping("/candidato/create")
    @ResponseBody
    public ResponseEntity<Object> addCandidato(@RequestBody Candidato candidato) {
        if (candidatoService.save(candidato) != null) {
            return new ResponseEntity<>(candidatoService.save(candidato), HttpStatus.OK);
        } else
            return new ResponseEntity<>("Erro ao adicionar candidato", HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/candidato/update")
    @ResponseBody
    public ResponseEntity<Candidato> updateCandidato(@RequestBody Candidato candidato) {
        if (candidatoService.findById(candidato.getCandidatoId()) != null) {
            return new ResponseEntity<>(candidatoService.save(candidato), HttpStatus.OK);
        } else
            return new ResponseEntity<>(candidatoService.save(candidato), HttpStatus.OK);
    }

    @PostMapping("/candidato/find-candidato-id")
    @ResponseBody
    public ResponseEntity<Object> findCandidadoById(@RequestBody Candidato candidatoRequest) {
        Candidato candidatoData = candidatoService.findById(candidatoRequest.getCandidatoId());
        if (candidatoData != null) {
            return ResponseEntity.status(HttpStatus.OK).body(candidatoData);
        } else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Candidato não encontrado.");
    }

    @PostMapping("/eleitor/votar-canditato")
    @ResponseBody
    public ResponseEntity<Object> votarById(@RequestBody Candidato candidatoRequest) {
        Eleicao eleicaoData = eleicaoService.findById(candidatoRequest.getEleicao().getEleicaoId());
        Candidato candidatoData = candidatoService.findById(candidatoRequest.getCandidatoId());
        if (candidatoData != null && eleicaoData != null) {
            candidatoData.setQtdVotos(candidatoData.getQtdVotos() + 1);
            eleicaoData.setTotalEleitores(eleicaoData.getTotalEleitores() + 1);
            eleicaoService.save(eleicaoData);
            return ResponseEntity.status(HttpStatus.OK).body(candidatoService.save(candidatoData));
        } else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Eleição ou candidato não encontrado.");
    }

    @DeleteMapping("/candidato/delete")
    @ResponseBody
    public ResponseEntity<Object> deleteById(@RequestBody Candidato candidatoRequest) {
        Candidato candidatoData = candidatoService.findById(candidatoRequest.getCandidatoId());
        if (candidatoData != null) {
            candidatoService.delete(candidatoData);
            return ResponseEntity.status(HttpStatus.OK).body(candidatoData);
        } else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Candidato não encontrado.");
    }

    @DeleteMapping("/candidato/delete-all")
    @ResponseBody
    public ResponseEntity<Object> deleteAll() {
        if (!candidatoService.findAll().isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK).body(candidatoService.deleteAll());
        } else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Sem candidatos cadastrados.");
    }
}
