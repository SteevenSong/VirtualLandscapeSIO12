import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un triangle
 */
export class Soleil extends AbstractForm {
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

soleil(ctx, dx, dy) {
    let ox = dx
    let oy = dy

    ctx.save()

   const gradient = ctx.createRadialGradient(200, 200, 200, 50, 200, 200, 100);
   gradient.addColorStop(0, '#FFB347');
   gradient.addColorStop(1, '#FFD700');

    ctx.beginPath();
    ctx.arc(ox + 0, oy + 100, 100, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

        for (let i = 0; i < 8; i++){
        const angle = Math.PI / 4 * i;
        const x = Math.cos(angle) * 150 + 200;
        const y = Math.sin(angle) * 150 + 200;

        ctx.beginPath();
        ctx.moveTo(200, 200);
        ctx.lineTo(x, y);
        ctx.strokeStyle = '#FFD700';
        ctx.lineWith = 10
        ctx.stroke();
        }
}
draw(ctx) {
    super.draw(ctx)
    this.soleil(ctx, this.x, this.y)
  }

static buildForms() {

    let forms = []

    forms.push(new Soleil(200, 100,'','', 1, false, 50))
    
    return forms
  }

}