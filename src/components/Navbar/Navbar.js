import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileLeftMenuSlider from '@material-ui/core/Drawer';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import SearchField from "../Searchbar/Searchbar"

import {
	AppBar,
	Toolbar,
	ListItem,
	IconButton,
	ListItemText,
	ListItemIcon,
	Divider,
	List,
	Typography,
	Box,
} from '@material-ui/core';

import {
	Menu,
	AssignmentInd,
	Home,
	Apps,
	Bookmark,
	Inbox,
	People,
} from '@material-ui/icons';

// CSS STYLES
const useStyles = makeStyles((theme) => ({
	menuSliderContainer: {
		width: 250,
		background: '#DDDDDD',
		height: '100%',
	},
	listTextColor: {
		color: '#000000',
	},
}));

const menuItems = [
	{
		listIcon: <Home />,
		listText: 'Home',
		listPath: '/',
	},
	{
		listIcon: <Bookmark />,
		listText: 'Bookmarks',
		listPath: 'bookmark',
	},
	{
		listIcon: <People />,
		listText: 'Users Followed',
		listPath: 'users',
	},
];

function Navbar() {
	const [state, setState] = useState({
		left: false,
	});
	const toggleSlider = (slider, open) => () => {
		setState({ ...state, [slider]: open });
	};

	const classes = useStyles();

	const sideList = (slider) => (
		<Box
			className={classes.menuSliderContainer}
			component='div'
			onClick={toggleSlider(slider, false)}>
			<Divider />

			<List>
				{menuItems.map((isItem, key) => (
					<ListItem button key={key} component={Link} to={isItem.listPath}>
						<ListItemIcon className={classes.listTextColor}>
							{isItem.listIcon}
						</ListItemIcon>
						<ListItemText
							className={classes.listTextColor}
							primary={isItem.listText}
						/>
					</ListItem>
				))}
			</List>
		</Box>
	);
	return (
		<>
			<Box component='nav'>
				<AppBar position='static' style={{ background: '#0074D9' }}>
					<Toolbar>
						<IconButton onClick={toggleSlider('left', true)}>
							<Menu style={{ color: '#FFFFFF' }} />
						</IconButton>
						<Typography variant='h5' style={{ color: '#FFFFFF' }}>
							App Name
						</Typography>
						<SearchField/>
						<MobileLeftMenuSlider
							anchor='left'
							open={state.left}
							onClose={toggleSlider('left', false)}>
							{sideList('left')}
							<Footer />
						</MobileLeftMenuSlider>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
}

export default Navbar;
