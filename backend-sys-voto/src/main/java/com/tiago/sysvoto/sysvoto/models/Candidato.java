package com.tiago.sysvoto.sysvoto.models;

import java.io.Serializable;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.tiago.sysvoto.sysvoto.models.enums.Cargo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Candidato implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID candidatoId;
    @Enumerated(EnumType.STRING)
    private Cargo cargo;
    private String nome;
    private String nomeVice;
    private String partido;
    private int numero;
    private String siglaPartido;
    private long qtdVotos;
    @Column(columnDefinition = "TEXT")
    private String uriImgCandidato;
    @Column(columnDefinition = "TEXT")
    private String uriImgVice;
    private boolean segundoTurno;
    @ManyToOne
    @JoinColumn(name = "eleicao_id")
    private Eleicao eleicao;

}
