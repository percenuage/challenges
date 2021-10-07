package fr.agendillard.test.model;

import fr.agendillard.model.*;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class GridTest {

    private static final int COUNT_RANDOMLY_GRID_TEST = 100;

    @Test
    void setup_allShipsArePresent() {
        Grid grid = new Grid();
        grid.setup();
        assertEquals(5, grid.getShips().size());
        assertEquals(true, grid.getShips().get(0) instanceof Carrier);
        assertEquals(true, grid.getShips().get(1) instanceof Battleship);
        assertEquals(true, grid.getShips().get(2) instanceof Cruiser);
        assertEquals(true, grid.getShips().get(3) instanceof Submarine);
        assertEquals(true, grid.getShips().get(4) instanceof Destroyer);
    }

    @Test
    void setup_allShipsAreRamdomlyPlaced() {
        List<String> grids = buildStringGridList(COUNT_RANDOMLY_GRID_TEST);
        for (int i = 0; i < COUNT_RANDOMLY_GRID_TEST; i++) {
            for (int j = 0; j < COUNT_RANDOMLY_GRID_TEST; j++) {
                if (i != j) {
                    assertEquals(false, grids.get(i).equals(grids.get(j)));
                }
            }
        }
    }

    private static List<String> buildStringGridList(int count) {
        List<String> grids = new ArrayList<>();
        for (int i = 0; i < count; i++) {
            Grid grid = new Grid();
            grid.setup();
            grids.add(grid.toString());
        }
        return grids;
    }

    @Test
    void shoot_missed() {
        Grid grid = new Grid();
        Cell target = grid.getCell(0, 0);
        assertEquals(CellStatus.UNDISCOVERED, target.getStatus());
        grid.shoot(target);
        assertEquals(CellStatus.MISSED, target.getStatus());
    }

    @Test
    void shoot_hitAndNotSunk() {
        Grid grid = new Grid();
        grid.setup();
        Ship ship = grid.getShips().get(0);
        Cell target = ship.getCells().get(0);
        assertEquals(CellStatus.UNDISCOVERED, target.getStatus());
        grid.shoot(target);
        assertEquals(CellStatus.HIT, target.getStatus());
        assertEquals(false, ship.isDestroyed());
    }

    @Test
    void shoot_hitAndSunk() {
        Grid grid = new Grid();
        grid.setup();
        Ship ship = grid.getShips().get(0);
        List<Cell> targets = ship.getCells();
        for (Cell target : targets) {
            assertEquals(CellStatus.UNDISCOVERED, target.getStatus());
            grid.shoot(target);
            assertEquals(CellStatus.HIT, target.getStatus());
        }
        assertEquals(true, ship.isDestroyed());
    }

    @Test
    void check_noShipsAreDestroyed() {
        Grid grid = new Grid();
        grid.setup();
        assertEquals(false, grid.check());

    }

    @Test
    void check_allShipsAreDestroyed() {
        Grid grid = new Grid();
        grid.setup();
        destroyedAllShips(grid.getShips());
        assertEquals(true, grid.check());
    }

    private static void destroyedAllShips(List<Ship> ships) {
        ships.forEach(ship -> ship.getCells().forEach(Cell::shoot));
    }
}