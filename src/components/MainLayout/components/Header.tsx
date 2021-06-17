import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Cart from "components/MainLayout/components/Cart";
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    homeLink: {
      color: 'white',
      textDecoration: 'none'
    }
  }),
);

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const auth = true;
  const redirectUrl = window.location.hostname === 'localhost'
    ? `http://localhost:3000/`
    : `https://d2lvjuwl8mt9u1.cloudfront.net/`;
  const cognitoAuthUrl = `https://test-demo-pool.auth.eu-west-1.amazoncognito.com/login?client_id=35st811o7ph9kfpknkk0nfbrbu&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=${redirectUrl}`;
  console.log('cognitoAuthUrl ', cognitoAuthUrl)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link className={classes.homeLink} to="/">Tile Shop</Link>
        </Typography>

        {auth && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem component={Link} to="/admin/orders" onClick={handleClose}>Manage orders</MenuItem>
              <MenuItem component={Link} to="/admin/products" onClick={handleClose}>Manage products</MenuItem>
              <MenuItem> <a href={cognitoAuthUrl}> Login </a> </MenuItem>
            </Menu>
          </div>
        )}
        <Cart/>
      </Toolbar>
    </AppBar>
  );
}
