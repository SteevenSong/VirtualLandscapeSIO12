import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine
 */
export class Fusee extends AbstractForm {
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
  fusee(ctx, dx, dy) {
    let ox = dx
    let oy = dy

    ctx.save()

// Corps de la fusée
    ctx.beginPath();
    ctx.moveTo(ox+100,oy+300);
    ctx.lineTo(ox+150,oy+200);
    ctx.lineTo(ox+250,oy+200);
    ctx.lineTo(ox+300,oy+300);
    ctx.closePath();
    ctx.fillStyle = 'black';
    ctx.fill();

// Pointe de la fusée
    ctx.beginPath();
    ctx.moveTo(ox+150,oy+200);
    ctx.lineTo(ox+200,oy+100);
    ctx.lineTo(ox+250,oy+200);
    ctx.closePath();
    ctx.fillStyle = 'red';
    ctx.fill();

// Aile de la fusée
    ctx.beginPath();
    ctx.moveTo(ox+150,oy+250);
    ctx.lineTo(ox+100,oy+300);
    ctx.lineTo(ox+150,oy+300);
    ctx.closePath();
    ctx.fillStyle = 'gray';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(ox+250,oy+250);
    ctx.lineTo(ox+300,oy+300);
    ctx.lineTo(ox+250,oy+300);
    ctx.closePath();
    ctx.fillStyle = 'gray';
    ctx.fill();

// Fenetre de la fusée
    ctx.beginPath();
    ctx.arc(ox + 175, oy + 225, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(ox + 225, oy + 225, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();

}
draw(ctx) {
    super.draw(ctx)
    this.fusee(ctx, this.x, this.y)
  }
  static buildForms() {

    let forms = []

    forms.push(new Fusee(550, 99,'','', 1, false, 50))

    return forms
  }  
}