import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from "../../actions/usersAction";
import { useParams } from "react-router-dom";
import { faLongArrowAltLeft, faPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

import { TitleName, StyledFontAwesomeIconArrowLeft, ContainerUserDetails, ContainerUserDetailsTop } from "./UserDetails.styled";
import { LoadingSpinner } from "../../utils/LoadingSpinner";
import Modal from "../../utils/Modal/Modal";
import Form from "../../components/Form/Form";
import Posts from "../../components/Posts/Posts";

const UserDetails = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(()=>{
        dispatch(getUserDetail(id))
    },[dispatch, id])

    return ( 
        <>
            <ContainerUserDetails>
                <ContainerUserDetailsTop>

                    <Link to={"/"}><StyledFontAwesomeIconArrowLeft icon={ faLongArrowAltLeft }/></Link>

                    { user.loading && <LoadingSpinner /> }

                    { user.data !== "" && user.error === null ?
                        <>
                            <TitleName>{user.data.name}</TitleName> 

                            <StyledFontAwesomeIconArrowLeft icon={ faPlus } onClick={() => setIsOpen(true)}/>
                        </>
                        :
                        <p>Something gone wrong...</p>
                    }
                    
                </ContainerUserDetailsTop>
                
                <Posts userId = { id } />
                
            </ContainerUserDetails>

            <Modal open={isOpen} >
                <Form onClose={() => setIsOpen(false)} userId = { id } />
            </Modal>
        </>
     );
}
 
export default UserDetails;