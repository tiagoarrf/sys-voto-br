package com.tiago.sysvoto.sysvoto.models.enums;


public enum Cargo {
    VEREADOR("Vereador"),
    PREFEITO("Prefeito"),
    
    DEPUTATO_FEDERAL("Deputado Estadual"),
    DEPUTADO_ESTADUAL("Deputado Federal"),
    SENADOR("Senador"),
    GOVERNADOR("Governador"),
    PRESIDENTE("Presidente");


    private Cargo() {
    }

    private Cargo(String opcaoCargo) {
        this.opcaoCargo = opcaoCargo;
    }

    public String getOpcaoCargo() {
        return opcaoCargo;
    }

    public void setOpcaoCargo(String opcaoCargo) {
        this.opcaoCargo = opcaoCargo;
    }

    private String opcaoCargo;
}
