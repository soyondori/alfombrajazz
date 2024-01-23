import Two from 'two.js'
import './style.css'
import { DrawMode, drawGrid } from './grid'
import { Vector } from 'two.js/src/vector'

const params = {
  fullscreen: true
}

const elem = document.body
const two = new Two(params).appendTo(elem)

drawGrid(two, {
  position: new Vector(two.width * 0.5, two.height * 0.5),
  size: new Vector(512, 512),
  tiles: 5,
  drawMode: DrawMode.Corner
})