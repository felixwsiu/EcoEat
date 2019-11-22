import React, { Component } from 'react';
import Typist from 'react-typist';
import instagramLogo from './instagram-logo.svg';

export default class Analysis extends Component {
    render() {
        return (
            <>
            <img src={instagramLogo} className="inslogo" alt="logo"/>
            <Typist className="Show-text-type">
                It looks like a...
        <h1>Cheeseburger!</h1>

                <h2>Do you know...</h2>
    
                <h2>For this burger to reach your table, about 609.2 grams of carbon dioxide is emitted.</h2>
    
                <h2>A square meter of pine tree forest in Finland spends around 5671 days to fully offset this emission.</h2>?
    
                <h2>It produces the same amount of emission as a car driving 34 miles.</h2>
                

      </Typist>
      </>
        );
    }
}