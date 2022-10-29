import React, { Fragment, PropsWithChildren, useContext } from 'react'
import { forbiddenRedirect } from '../../utils/Redirect';
import Context from '../context/Context'
import useNavigate from '../hook/useNavigate';
interface Props extends PropsWithChildren<{}> {
    redirect: string | undefined;
}
function NonAuthorize(props: Props) {
    const { authenticated } = useContext(Context);
    const { replace } = useNavigate();
    return (
        authenticated ?
            () => replace(props.redirect || forbiddenRedirect)
            :
            <Fragment>{props.children}</Fragment>
    )
}

export default NonAuthorize