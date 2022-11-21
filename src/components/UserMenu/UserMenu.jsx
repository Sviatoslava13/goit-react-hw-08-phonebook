import { useDispatch, useSelector } from "react-redux"
import { getUser } from "redux/auth/authSelector";
import { logOut } from "redux/auth/operations";
import {Container, Text, Button} from './UserMenu.styled'
export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(getUser)
    
    return (
        <Container>
            <Text>{ user.email}</Text>
  <Button type="button" onClick={()=> dispatch(logOut())}>Log Out</Button>
</Container>
    )
}