import React, { Component } from 'react';
import avatar from './avatar.png';
import Accor from './components/Accor.component';
import './App.css';

const cvStyle = {
  width: '500px',
  textAlign : 'left',
  padding : '30px'
  };

  const avatarStyle = {
    width: '170px',
    float: 'left',
    backgroundColor: '#f9f9f9',
    border: '1px solid black',
    marginRight : '30px',
    marginBottom : '20px'
  };

  const headerStyle = {
    fontSize: '30px',
    textAlign: 'left',
    paddingBottom : '0px',
    marginBottom : '0px'
    };

    const subheaderStyle = {
      fontSize: '15px',
      textAlign: 'left',
      textTransform: 'uppercase',
      paddingTop : '0px',
      marginTop : '10px'
      };
  
  const contactStyle = {
        borderTop: '1px solid #000',
        padding: '10px',
        paddingTop : '0',
        clear : 'both',
        marginTop : '10px',
  }

  const contactPar = {
    width : '40%',
    float : 'left',
}


const PERSON_EDUCATION = [{
  id: 1,
  name: 'Szkoła podstawowa',
  content: 'Primary ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat pulvinar tempor. Aenean eu mauris massa. Mauris pretium volutpat sapien at mollis. Sed consequat pharetra tellus vitae egestas. Mauris molestie purus mattis magna finibus auctor. Aliquam pretium ante non urna porttitor, eget finibus libero venenatis. Quisque ultricies ultrices neque, vel pellentesque mi efficitur vitae. Sed eget elit vel turpis interdum bibendum in nec urna. Vestibulum venenatis eros pellentesque sapien iaculis semper.',
}, {
  id: 2,
  name: 'Liceum Ogólnokształcące',
  content: 'Lo ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat pulvinar tempor. Aenean eu mauris massa. Mauris pretium volutpat sapien at mollis. Sed consequat pharetra tellus vitae egestas. Mauris molestie purus mattis magna finibus auctor. Aliquam pretium ante non urna porttitor, eget finibus libero venenatis. Quisque ultricies ultrices neque, vel pellentesque mi efficitur vitae. Sed eget elit vel turpis interdum bibendum in nec urna. Vestibulum venenatis eros pellentesque sapien iaculis semper.',
},
{
  id: 3,
  name: 'Studia magisteskie',
  content: 'Magis ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat pulvinar tempor. Aenean eu mauris massa. Mauris pretium volutpat sapien at mollis. Sed consequat pharetra tellus vitae egestas. Mauris molestie purus mattis magna finibus auctor. Aliquam pretium ante non urna porttitor, eget finibus libero venenatis. Quisque ultricies ultrices neque, vel pellentesque mi efficitur vitae. Sed eget elit vel turpis interdum bibendum in nec urna. Vestibulum venenatis eros pellentesque sapien iaculis semper.',
},
];

const PERSON_EXPERIENCE = [{
  id: 1,
  name: 'Google',
  content: 'Google ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat pulvinar tempor. Aenean eu mauris massa. Mauris pretium volutpat sapien at mollis. Sed consequat pharetra tellus vitae egestas. Mauris molestie purus mattis magna finibus auctor. Aliquam pretium ante non urna porttitor, eget finibus libero venenatis. Quisque ultricies ultrices neque, vel pellentesque mi efficitur vitae. Sed eget elit vel turpis interdum bibendum in nec urna. Vestibulum venenatis eros pellentesque sapien iaculis semper.',
}, {
  id: 2,
  name: 'Tieto',
  content: 'Tieto ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat pulvinar tempor. Aenean eu mauris massa. Mauris pretium volutpat sapien at mollis. Sed consequat pharetra tellus vitae egestas. Mauris molestie purus mattis magna finibus auctor. Aliquam pretium ante non urna porttitor, eget finibus libero venenatis. Quisque ultricies ultrices neque, vel pellentesque mi efficitur vitae. Sed eget elit vel turpis interdum bibendum in nec urna. Vestibulum venenatis eros pellentesque sapien iaculis semper.',
},
{
  id: 3,
  name: 'IBM',
  content: 'IBM ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat pulvinar tempor. Aenean eu mauris massa. Mauris pretium volutpat sapien at mollis. Sed consequat pharetra tellus vitae egestas. Mauris molestie purus mattis magna finibus auctor. Aliquam pretium ante non urna porttitor, eget finibus libero venenatis. Quisque ultricies ultrices neque, vel pellentesque mi efficitur vitae. Sed eget elit vel turpis interdum bibendum in nec urna. Vestibulum venenatis eros pellentesque sapien iaculis semper.',
},
];





class App extends Component {
  render() {
    return (
      <div className="App">

      <div style={cvStyle}>
      <img src={avatar} className=""  style={avatarStyle} alt="" />
      <h3 style={headerStyle}>Jan Kowalski</h3>
      <h5 style={subheaderStyle}>JavaScript Developer</h5>

      <div style={contactStyle}>
      <p style={contactPar}>linkedin.com</p>
      <p style={contactPar}>jan.kowalski@email.com</p>
      </div>

      <Accor title="Edukacja" data={PERSON_EDUCATION} />
      <Accor title="Doświadczenie" data={PERSON_EXPERIENCE} />
      </div>

      </div>
    );
  }
}

export default App;
