package fr.agendillard.model;

public class Cell {
    private int row;
    private int col;
    private Ship ship;
    private CellStatus status;

    public Cell(int row, int col) {
        this.row = row;
        this.col = col;
        this.status = CellStatus.UNDISCOVERED;
    }

    public boolean isFree() {
        return this.ship == null;
    }

    public boolean isHit() {
        return this.status.equals(CellStatus.HIT);
    }

    public CellStatus shoot() {
        if (this.isFree()) {
            this.status = CellStatus.MISSED;
        } else {
            this.status = CellStatus.HIT;
            this.ship.shoot();
        }
        return this.status;
    }

    @Override
    public String toString() {
        return this.ship != null ? "x" : ".";
    }

    public int getRow() {
        return row;
    }

    public int getCol() {
        return col;
    }

    public void setShip(Ship ship) {
        this.ship = ship;
    }

    public CellStatus getStatus() {
        return status;
    }
}
