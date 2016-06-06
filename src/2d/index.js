import regl from 'regl';
import * as Commands  from './commands';

class Construction {

  constructor(options) {
    this.regl = regl();
    this.commands = {};
    this.commands.triangle = Commands.triangle(this.regl);
  }

  rect (options) {
    const { position, size } = options;
    const vertices = [[
      [position[0], position[1]],
      [position[0], position[1] + size[1]],
      [position[0] + size[0], position[1] + size[1]],
    ], [
      [position[0], position[1]],
      [position[0] + size[0], position[1]],
      [position[0] + size[0], position[1] + size[1]],
    ]];
    this.commands.triangle({
      position: this.regl.buffer(vertices[0]),
      color: options.color
    });
    this.commands.triangle({
      position: this.regl.buffer(vertices[1]),
      color: options.color
    });
  }

}




export default Construction;
