import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './style-reset.css';

class Home extends Component {


  render() {

    return (
      <Fragment>
        <Header />
        <Card style={{ border: '1px solid', marginTop: 100, height: "100%" }}>
          <CardActionArea>
            <CardMedia title="plusEstampas"
            />
            <CardContent>
              <Typography style={{ borderBottom: '0.5px solid', display: 'flex', justifyContent: 'center' }} gutterBottom variant="h5" component="h2">
                +Estampas
                            </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <p>Homepage de estampas, o link "Acervo" leva à página de disposição de todas as estampas armazenadas no banco de dados,
                bem como outras informações como nome, descrição e etc.
                Enquanto isso o link "Cadastro" leva à página de cadastro de novas estampas e armazenamento.
                                O link "Relatórios" apresenta a página referente aos relatórios referesntes às estampas</p>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ backgroundColor: "#FFD700", display: 'flex', justifyContent: 'center', borderTop: '0.5px solid' }}>
            <Button>
              <Link to='/Acervo' style={{ textDecorationLine: "none", color: "#000000" }}>Acervo</Link>
            </Button>
            <Button size="small">
              <Link to='/Cadastro' style={{ textDecorationLine: "none", color: "#000000" }}>Cadastro</Link>
            </Button>
            <Button size="small">
              <Link to='/Cadastro' style={{ textDecorationLine: "none", color: "#000000" }}>Relatórios</Link>
            </Button>
          </CardActions>
        </Card>
        <Footer />
      </Fragment>
    )
  }
}

export default Home;