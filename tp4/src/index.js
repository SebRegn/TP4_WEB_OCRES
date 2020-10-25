import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import img1 from "../src/img/profil1.PNG";
import img2 from "../src/img/profil2.PNG";
import img3 from "../src/img/profil3.PNG";


class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Gilles",
      prenom: "Marine",
      birthday: "06/12/1994",
      lastcom: "Je suis Charlie",
      img: img2
    };
  }

  handleClick(i){
    const profils = [
      {
        nom: "Gilles",
        prenom: "Marine",
        birthday: "06/12/1994",
        lastcom:" Je suis Charlie",
        img : img2
      },
      {
        nom: "Mouton",
        prenom: "Alain",
        birthday: "30/05/1983",
        lastcom: "J'adore ma vie",
        img : img1
      },
      {
        nom: "Dupont",
        prenom: "Jean",
        birthday: "14/03/1998",
        lastcom: " C'est quand que l'Iphone 12 sort?",
        img : img3
    
      }
    ];

    this.setState({
      nom: profils[i].nom,
      prenom: profils[i].prenom,
      birthday: profils[i].birthday,
      lastcom : profils[i].lastcom,
      img :  profils[i].img
    })
  }

  render() {
    return (
      <div>
        <div className="navigation">
          <button type="button" onClick={()=>{this.handleClick(0)}}>
            Marine
          </button>
          <button type="button" onClick={()=>{this.handleClick(1)}}>
            Alain
          </button>
          <button type="button" onClick={()=>{this.handleClick(2)}}>
            Jean
          </button>
        </div>
        <div className="profil">
          <Profil nom={this.state.nom} prenom={this.state.prenom} birthday={this.state.birthday} img={this.state.img}/>
        </div>
        <div className="lastcom">
          <Lastcom lastcom={this.state.lastcom} />
        </div>
        
      </div>
    );
  }
}

class Profil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: null,
      prenom: null,
      birthday: null,
      img: null
    };
  }

  render() {


    return ( 
    <div>
      <img src={this.props.img}/> 
      <div>nom : {this.props.nom}</div>
      <div>prenom : {this.props.prenom}</div>
      <div>birthday : {this.props.birthday}</div>
    </div>
    );
  }
}

class Lastcom extends React.Component {
  render() {
    return (
      <div>
        last Comment : {this.props.lastcom}
      </div>
    );
  }
}



class Page extends React.Component {
    render() {
      return (
        <div className="page">
            <div className="navigation">
                <Navigation />
            </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Page />,
    document.getElementById('root')
  );