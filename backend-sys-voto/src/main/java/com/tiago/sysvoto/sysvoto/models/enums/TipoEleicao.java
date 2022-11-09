package com.tiago.sysvoto.sysvoto.models.enums;

public enum TipoEleicao {

    MODO_PRESITENTE("Presidente"),
    MODO_PREFEITO("Prefeito");

    private TipoEleicao(String tipo) {
        this.tipo = tipo;
    }

    private String tipo;

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }


}

