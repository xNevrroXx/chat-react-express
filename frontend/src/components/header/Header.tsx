import {Navbar, Button, Text, Switch} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
// own modules
import {useDarkMode} from "../../hooks/useDarkMode";
import {useAppDispatch} from "../../hooks/store.hook";
import { toggleMode } from '../../store/actions/themeMode';
import { createPath } from "../../utilits/createPath";
import { ROUTE } from "../../router/routes";


const Header = () => {
  const dispatch = useAppDispatch();
  const {isDark, changeMode} = useDarkMode("light", () => dispatch(toggleMode()));

  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Brand>
        <NavLink to="/">
          <Text 
            h2
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >Chat</Text>
        </NavLink>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        {/*<Navbar.Link href="#">Features</Navbar.Link>*/}
        {/*<Navbar.Link isActive href="#">Customers</Navbar.Link>*/}
        {/*<Navbar.Link href="#">Pricing</Navbar.Link>*/}
        {/*<Navbar.Link href="#">Company</Navbar.Link>*/}
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Switch 
            checked={isDark}
            onChange={() => changeMode()}
          />
        </Navbar.Item>
        <Navbar.Item>
          <NavLink to={createPath({path: ROUTE.AUTHORIZATION})}>Login</NavLink>
        </Navbar.Item>
        <Navbar.Item>
          <Button auto flat>
            <NavLink to={createPath({path: ROUTE.REGISTRATION})}>Sign Up</NavLink>
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default Header;