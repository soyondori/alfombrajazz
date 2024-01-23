import Two from 'two.js';
import { Rectangle } from 'two.js/src/shapes/rectangle';
import { Vector } from 'two.js/src/vector';

export enum DrawMode {
  Corner = 0,
  Center = 1
}

export interface GridArgs {
  position: Vector
  size: Vector
  tiles: number,
  drawMode: DrawMode
}

export interface Grid {
  position: Vector,
  size: Vector,
  tiles: Array<Rectangle>
}

export const drawGrid = (two: Two, args: GridArgs) => {
  const colSize = args.size.x / args.tiles
  const rowSize = args.size.y / args.tiles
  const tiles: Array<Rectangle> = []

  for (let col = 0; col < args.tiles; col++) {
    for (let row = 0; row < args.tiles; row++) {
      const x = colSize * col + args.position.x
      const y = rowSize * row + args.position.y
      const rect = two.makeRectangle(x, y, colSize, rowSize) 
      rect.noStroke()

      tiles.push(rect)
    }

    two.update()
  }

  return {
    position: args.position,
    size: args.size,
    tiles
  }
}