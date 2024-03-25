import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine 
 */
export class Drapeau extends AbstractForm {
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

  drapeau(ctx, dx, dy) {
    let ox = dx
    let oy = dy

    ctx.beginPath();
    ctx.moveTo(ox+100,oy+350);
    ctx.lineTo(ox+100,oy+150);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'lightgray';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(ox+100,oy+150);
    ctx.lineTo(ox+200,oy+150);
    ctx.lineTo(ox+200,oy+200);
    ctx.lineTo(ox+100,oy+200);
    ctx.closePath();
    ctx.fillStyle = '#008080';
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'white';
    ctx.stroke();
}
draw(ctx) {
    super.draw(ctx)
    this.drapeau(ctx, this.x, this.y)
  }

static buildForms() {

    let forms = []

    forms.push(new Drapeau(800, 100,'','', 1, false, 50))
    
    return forms
  }
}