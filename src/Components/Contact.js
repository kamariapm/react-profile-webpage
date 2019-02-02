import React, { Component } from 'react';

class Contact extends Component {
    render() {
      return (
    <div className="Contact">
    <div class='container' style={containerContactStyle}>
        <p>
            <h1>CONTACT</h1>
            <div>
<h5 style={stylingFormat}>Email:</h5> <p style={stylingFormat}>kamaria.inman@gmail.com</p> </div>
<div><h5 style={stylingFormat}>LinkedIn:</h5> <p style={stylingFormat}>https://www.linkedin.com/in/kamariapm/</p></div>
<div><h5 style={stylingFormat}>Phone:</h5> <p style={stylingFormat}>404-729-7574</p> </div>
</p>
</div>       
    </div>
      );
    }
  }  

const containerContactStyle = {
    marginTop: '5%',
    textAlign: 'left',
}

const stylingFormat = {
    display: 'inline',
}

  export default Contact;