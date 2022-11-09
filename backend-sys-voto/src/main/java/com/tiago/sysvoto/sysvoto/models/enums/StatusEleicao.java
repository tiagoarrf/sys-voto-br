package com.tiago.sysvoto.sysvoto.models.enums;

public enum StatusEleicao {
    INICIADA("Iniciada"),
    FINALIZADA("Finalizada"),
    CANCELADA("Cancelada"),
    PREVISTA("Prevista");

    private String status;

    private StatusEleicao(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    
}
