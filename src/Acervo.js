import React, { Component, Fragment } from 'react';
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Estampas from './Components/main/CardContent'

class Acervo extends Component {

	render() {
		return (
			<Fragment>
				<Header />
				<Estampas />
				<Footer />
			</Fragment>
		)
	}
}
export default Acervo;