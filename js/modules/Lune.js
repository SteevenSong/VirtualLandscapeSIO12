import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine 
 */
export class Lune extends AbstractForm {
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
  lune(ctx, dx, dy){
    let ox = dx
    let oy = dy

    ctx.save()
  
    ctx.beginPath();
    ctx.arc(ox+550, oy+40, 700, 0, 2 * Math.PI);
    ctx.fillStyle = "#eaeaea";
    ctx.fill();

  }


  draw(ctx) {
    super.draw(ctx)
    this.lune(ctx, this.x, this.y)
  }

  static buildForms() {

    let forms = []

    forms.push(new Lune(200, 1050,'','', 1, false, 50))
    
    return forms
  }
}