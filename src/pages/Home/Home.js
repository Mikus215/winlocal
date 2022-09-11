import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions/usersAction";
import { Link } from "react-router-dom";
import User from "../../components/User/User";

import { ContainerUsers, Container } from "./Home.styled";
import { LoadingSpinner } from "../../utils/LoadingSpinner";

const Home = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    useEffect(() => {
        dispatch(getUsers())
      },[dispatch])

    return ( 
      <Container>
        <ContainerUsers>

          { users.loading && <LoadingSpinner /> }

          { users.data.length > 0 && users.error === null ?

            users.data.map(user => (
              <Link to={`/user/${user.id}`} key={ user.id }>
                <User user={ user }/>
              </Link>
            )) 

            :

            <p>Something gone wrong...</p>
          }

        </ContainerUsers>
      </Container>
     );
}
 
export default Home;