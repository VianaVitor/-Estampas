import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


class Header extends Component {

	render() {

		return (
			<Fragment>
				<AppBar position="absolute" style={{ position: "fixed", width: "100%", marginTop: 0, background: '#FFD700' }}>
					<Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
						<Link to='/'><img src={require('./logo_soma.png')} height="65px" alt="logo" /></Link>
					</Toolbar>
				</AppBar>
			</Fragment>
		)
	}
}

export default Header;
