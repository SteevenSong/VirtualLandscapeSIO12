import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un triangle
 */
export class Etoile extends AbstractForm {
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
   etoile(ctx, dx, dy) {
    let ox = dx
    let oy = dy

    ctx.save()

   
    ctx.beginPath();
    for ( var i = 0; i<=Math.random()*40000; i++) {
      let r = Math.round(Math.random() * 255)
      let g = Math.round(Math.random() * 255)
      let b = Math.round(Math.random() * 255)
  
      let rgb = `rgb(${r}, ${g}, ${b})`
  
    ctx.arc(ox +Math.random()*1500, oy +Math.random()*1500, 5, 0, Math.PI * 2, true); 
    ctx.fillStyle = rgb 
    ctx.fill()
    ctx.beginPath();
    }
}

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    super.draw(ctx)
    this.etoile(ctx, this.x, this.y)
  

  }

  static buildForms() {

    let forms = []

    forms.push(new Etoile(~~(Math.random() * 120) , ~~(Math.random() * 500) ,50,100,'','', 1, false,100))

    return forms
  }

}
