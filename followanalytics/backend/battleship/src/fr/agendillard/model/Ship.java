package fr.agendillard.model;

import java.util.ArrayList;
import java.util.List;

public abstract class Ship {
    private int size;
    private List<Cell> cells;

    public Ship(int size) {
        this.size = size;
        this.cells = new ArrayList<>();
    }

    public boolean isDestroyed() {
        return this.cells.stream().allMatch(Cell::isHit);
    }

    public void shoot() {
        // Nothing actually :)
    }

    public List<Cell> getCells() {
        return cells;
    }

    public void setCells(List<Cell> cells) {
        this.cells = cells;
        this.cells.forEach(cell -> cell.setShip(this));
    }

    public int getSize() {
        return size;
    }
}
