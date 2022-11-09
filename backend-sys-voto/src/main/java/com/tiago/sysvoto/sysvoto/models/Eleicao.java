package com.tiago.sysvoto.sysvoto.models;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tiago.sysvoto.sysvoto.models.enums.StatusEleicao;
import com.tiago.sysvoto.sysvoto.models.enums.TipoEleicao;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Eleicao implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID eleicaoId;

    @JsonIgnore
    @OneToMany(mappedBy = "eleicao")
    private List<Candidato> candidatos;
    @Enumerated(EnumType.STRING)
    private TipoEleicao tipoEleicao;
    private StatusEleicao statusEleicao;
    private LocalDateTime dateInicio;
    private LocalDateTime dateFim;
    private boolean segundoTurno;
    private long votosBrancos;
    private long votosNulos;
    private long totalEleitores;
}
