import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import PrimeraApp from '../PrimeraApp';


describe('Pruebas en <PrimeraApp />', () => {
    
    // test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
    //     const saludo = 'Hola, soy Goku';
    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> );
    //     expect( getByText( saludo ) ).toBeInTheDocument();
    // })

    test('debe de mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        //snapshot es como una fotografia de como se encuentra el componente
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe mostrar subtitulo enviado por props', () => {
        const saludo = 'Hola, Soy Goku';
        const subtitulo = 'soy un subtitulo';
        
        const wrapper = shallow
        ( <PrimeraApp 
            saludo={ saludo } 
            subtitulo = { subtitulo }
            />     
        );
        
        //funciona para buscar algo
        const textoParrafo = wrapper.find('p').text();

        console.log(textoParrafo);
        
        //que el texto que buscamos sea ese subtitulo
        expect( textoParrafo ).toBe(subtitulo);

    });
    
    
    

})
