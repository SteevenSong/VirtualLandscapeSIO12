import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un triangle
 */
export class Terre extends AbstractForm {
  // add default values to avoid errors on empty arguments
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    ordreConstruction = 100
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }

  terre(ctx, dx, dy) {
    let ox = dx
    let oy = dy

    ctx.beginPath();
    ctx.arc(ox+150, oy+150, 120, 0, Math.PI * 2);
    ctx.fillStyle = 'cyan';
    ctx.fill();

}

neptune(ctx, dx, dy) {
  let ox = dx
  let oy = dy

  ctx.beginPath();
  ctx.arc(ox-400, oy-80, 80, 0, Math.PI * 2);
  ctx.fillStyle = 'blue';
  ctx.fill();

}
draw(ctx) {
    super.draw(ctx)
    this.terre(ctx, this.x, this.y)
    this.neptune(ctx, this.x, this.y)
  }
  static buildForms() {

    let forms = []

    forms.push(new Terre(1230, 190,'','', 1, false, 50))
    
    return forms
  }
}