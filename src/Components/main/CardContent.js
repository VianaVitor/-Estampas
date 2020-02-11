import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = {
  card: {
    minWidth: 400,
    maxWidth: 450,
    display: 'inline-block',
    position: 'relative',
    margin: 30,
    marginTop: 0,
  },
  media: {
    height: 600,
    borderColor: "#000"
  },
  button: {
    backgroundColor: "#FFD700",
  },
  content: {
    backgroundColor: "#F5F5F5",
  },
  paper: {
    marginTop: 100,
    borderWidth: "0",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  }
};


class Estampas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      items: []
    }
  }

  componentDidMount() {

    this.setState({ isLoading: true })
    fetch('http://localhost:8000/estampas')
      .then(res => res.json())
      .then(json => {
        this.setState({ items: json, isLoading: false })
      });

  }


  render() {

    const { classes } = this.props;
    const { items } = this.state;

    return (

      <Fragment >
        <Paper style={styles.paper} >
        {items.map(item => (

          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={item.IMAGEM}
              title={item.no_estampa}
              style={styles.media}
            />
            <CardContent style={styles.content}>
              <Typography gutterBottom variant="h5" component="h2" margin="solid">
                {item.no_estampa}
              </Typography>
              <Typography component="p">
                Descrição: {item.ds_estampa}
              </Typography>
              <Typography component="p">
                Id: {item.id_estampa}
              </Typography>
              <Typography component="p">
                Id Estampa Mãe: {item.id_estampa_mae}
              </Typography>
              <Typography component="p">
                Briefing: {item.id_briefing}
              </Typography>
              <Typography component="p">
                Coordenado: {item.no_coordenado}
              </Typography>
              <Typography component="p">
                Arara: {item.no_arara}
              </Typography>
              <Typography component="p">
                Id Marca: {item.id_marca}
              </Typography>
              <Typography component="p">
                Id Coleção: {item.id_colecao}
              </Typography>
              <Typography component="p">
                Id Arquivo: {item.id_arquivo}
              </Typography>
              <Typography component="p">
                Id Modelo: {item.id_modelo}
              </Typography>
              <Typography component="p">
                Id Produto: {item.id_produto}
              </Typography>
              <Typography component="p">
                Id Fornecedor: {item.id_fornecedor}
              </Typography>
              <Typography component="p">
                Id Produto Estilo: {item.id_produto_estilo}
              </Typography>
              <Typography component="p">
                Id Ordem Produção: {item.id_ordem_producao}
              </Typography>
            </CardContent>

            <CardActions className={classes.button}>
              <Button size="small" >
                Compartilhar
              </Button>
            </CardActions>
          </Card>
        ))}
        </Paper>
      </Fragment>
    );
  }

}

Estampas.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Estampas);



