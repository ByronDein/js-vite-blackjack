import { pedirCarta, valorCarta, crearCartaHTML } from './index';

// turno de la computadora

/**
 * 
 * @param {Number} puntosMinimos  que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML Elemento HTML para mostar los puntos 
 * @param {HTMLElement} divCartasComputadora Elemento HTML para mostar las cartas 
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos,puntosHTML, divCartasComputadora, deck = [] ) => {

    if(!puntosMinimos) throw new Error('Puntos mínimos son necesarios')
    if(!puntosHTML) throw new Error('Argunmento PuntosHTML es Necesario')
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta =  crearCartaHTML(carta)
        divCartasComputadora.append( imgCarta );
        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}