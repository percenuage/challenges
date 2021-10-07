package fr.agendillard.model;

public enum CellStatus {
    UNDISCOVERED(0),
    MISSED (1),
    HIT (2);

    private Integer code;

    CellStatus(Integer code) {
        this.code = code;
    }

    @Override
    public String toString() {
        return this.code.toString();
    }
}
