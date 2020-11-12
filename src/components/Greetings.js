import React from 'react';

function Greetings(props) {
  // let greeting = {
  //   de: 'Hallo',
  //   en: 'Hello',
  //   es: 'Hola',
  //   fr: 'Bonjour'
  // }

  function greeting(param) {
    switch (param) {
      case 'de':
        return 'Hallo';
      case 'en':
        return 'Hello';
      case 'es':
        return 'Hola';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Hello';
    }
  }

  return (
    <div className="border border-dark m-3 p-2">
      <p>
        {greeting(props.lang)} {props.children}
      </p>
    </div>
  );
}

export default Greetings;
