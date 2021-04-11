import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp';

describe('prueba de el archivo CounterApp', () => {

    let wrapper = shallow(<CounterApp />);
   
    //va a hacer que el componente se reinicie en cada prueba
    beforeEach(()=>{
         wrapper = shallow(<CounterApp />);

    });

    test('debe de hacer match con un snapshot', () => {
        
        expect( wrapper ).toMatchSnapshot();


    });

    test('debe mostrar el valor por defecto', () => {
       

        const wrapper = shallow(
            <CounterApp
             value = { 100 } 
             />
             );

        const counterTxt = wrapper.find('h2').text().trim();


        expect( counterTxt ).toBe( '100' );
  

    });
    
    test('Debe incrementar contador +1', () => {

        //busco en el indice 0 con at()
         wrapper.find('button').at(0).simulate('click');

         const counterTxt = wrapper.find('h2').text().trim();

         //comprobamos si el estado del componente cambio
         expect( counterTxt ).toBe('11');

    });

    test('Debe decrementar contador -1', () => {

        //busco en el indice 0 con at()
         wrapper.find('button').at(2).simulate('click');

         const counterTxt = wrapper.find('h2').text().trim();

         //comprobamos si el estado del componente cambio
         expect( counterTxt ).toBe('9');

    });
    
    test('debe de colocar el valor por defecto con el btn reset', () => {
        
        const wrapper = shallow(<CounterApp value = { 105 } />);
        
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterTxt = wrapper.find('h2').text().trim();

        expect( counterTxt ).toBe( '105' );

    });
    

})
