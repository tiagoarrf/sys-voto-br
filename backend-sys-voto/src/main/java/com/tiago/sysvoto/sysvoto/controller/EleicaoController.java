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

import com.tiago.sysvoto.sysvoto.models.Eleicao;
import com.tiago.sysvoto.sysvoto.models.enums.StatusEleicao;
import com.tiago.sysvoto.sysvoto.models.enums.TipoEleicao;
import com.tiago.sysvoto.sysvoto.service.EleicaoService;

@CrossOrigin
@RestController
public class EleicaoController {

    @Autowired
    EleicaoService eleicaoService;

    @GetMapping("/eleicao/find-all")
    public ResponseEntity<Object> find() {
        if (eleicaoService.findAll().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Sem eleicoes cadastradas");
        } else
            return new ResponseEntity<>(eleicaoService.findAll(), HttpStatus.OK);
    }

    @PostMapping("/eleicao/create")
    @ResponseBody
    public ResponseEntity<Object> addEleicao(@RequestBody Eleicao eleicao) {
        eleicao.setStatusEleicao(StatusEleicao.INICIADA);
        eleicao.setTipoEleicao(TipoEleicao.MODO_PREFEITO);
        if (eleicaoService.save(eleicao) != null) {
            return new ResponseEntity<>(eleicaoService.save(eleicao), HttpStatus.OK);
        } else
            return new ResponseEntity<>("Erro ao adicionar eleicao", HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/eleicao/update")
    @ResponseBody
    public ResponseEntity<Eleicao> updateEleicao(@RequestBody Eleicao eleicao) {
        if (eleicaoService.findById(eleicao.getEleicaoId()) != null) {
            return new ResponseEntity<>(eleicaoService.save(eleicao), HttpStatus.OK);
        } else
            return new ResponseEntity<>(eleicaoService.save(eleicao), HttpStatus.OK);
    }

    @PostMapping("/eleicao/find-eleicao-id")
    @ResponseBody
    public ResponseEntity<Object> findCandidadoById(@RequestBody Eleicao eleicaoRequest) {
        Eleicao eleicaoData = eleicaoService.findById(eleicaoRequest.getEleicaoId());
        if (eleicaoData != null) {
            return ResponseEntity.status(HttpStatus.OK).body(eleicaoData);
        } else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Eleicao não encontrada.");
    }

    @DeleteMapping("/eleicao/delete")
    @ResponseBody
    public ResponseEntity<Object> deleteById(@RequestBody Eleicao eleicaoRequest) {
        Eleicao eleicaoData = eleicaoService.findById(eleicaoRequest.getEleicaoId());
        if (eleicaoData != null) {
            eleicaoService.delete(eleicaoData);
            return ResponseEntity.status(HttpStatus.OK).body(eleicaoData);
        } else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Eleicao não encontrada.");
    }

    @DeleteMapping("/eleicao/delete-all")
    @ResponseBody
    public ResponseEntity<Object> deleteAll() {
        if (!eleicaoService.findAll().isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK).body(eleicaoService.deleteAll());
        } else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Sem eleicoes cadastradas");
    }
}
