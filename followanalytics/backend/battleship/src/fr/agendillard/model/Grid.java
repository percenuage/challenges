package fr.agendillard.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Grid {
    public static final int ROWS = 10;
    public static final int COLS = 10;

    private Cell[][] cells;
    private List<Ship> ships;

    public Grid() {
        this.cells = new Cell[ROWS][COLS];
        this.ships = new ArrayList<>();
        this.init();
    }

    private void init() {
        for (int i = 0; i < ROWS; i++) {
            for (int j = 0; j < COLS; j++) {
                this.cells[i][j] = new Cell(i, j);
            }
        }
    }

    public void setup() {
        this.addShip(new Carrier());
        this.addShip(new Battleship());
        this.addShip(new Cruiser());
        this.addShip(new Submarine());
        this.addShip(new Destroyer());
    }

    private void addShip(Ship ship) {
        List<Cell> shipCells = getRandomShipCells(ship);
        ship.setCells(shipCells);
        this.ships.add(ship);
    }

    private List<Cell> getRandomShipCells(Ship ship) {
        List<Cell> shipCells = null;
        int shipSize = ship.getSize();
        do {
            Cell cell = this.getRandomCell();
            int direction = this.getRandomDirection();
            try {
                shipCells = this.getShipCells(cell, direction, shipSize);
            } catch (ArrayIndexOutOfBoundsException e) {
                // It's fine if an exception was occurred because the ship is out of the grid
            }
        } while (shipCells == null || !isAllCellsAreFree(shipCells));
        return shipCells;
    }

    private Cell getRandomCell() {
        Random random = new Random();
        int row = random.nextInt(ROWS);
        int col = random.nextInt(COLS);
        return this.cells[row][col];
    }

    private int getRandomDirection() {
        Random random = new Random();
        return random.nextInt(2);
    }

    private List<Cell> getShipCells(Cell origin, int direction, int size) throws ArrayIndexOutOfBoundsException {
        List<Cell> shipCells = new ArrayList<>();
        int row = origin.getRow();
        int col = origin.getCol();
        for (int i = 0; i < size; i++) {
            if (direction == 0) {
                shipCells.add(this.getCell(row + i, col));
            } else {
                shipCells.add(this.getCell(row, col + i));
            }
        }
        return shipCells;
    }

    public Cell getCell(int row, int col) throws ArrayIndexOutOfBoundsException {
        return this.cells[row][col];
    }

    private boolean isAllCellsAreFree(List<Cell> shipCells) {
        return shipCells.stream().allMatch(Cell::isFree);
    }

    public CellStatus shoot(Cell target) {
        return target.shoot();
    }

    public boolean check() {
        return this.ships.stream().allMatch(Ship::isDestroyed);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < ROWS; i++) {
            for (int j = 0; j < COLS; j++) {
                sb.append(this.cells[i][j]).append(" ");
            }
            sb.append("\n");
        }
        return sb.toString();
    }

    public List<Ship> getShips() {
        return ships;
    }
}
