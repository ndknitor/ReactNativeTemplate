import React, { Fragment, PropsWithChildren, useContext, useEffect } from 'react'
import { forbiddenRedirect } from '../utils/Redirect';
import Context from '../shared/context/Context'
import useNavigate from '../shared/hook/useNavigate';
interface Props extends PropsWithChildren<{}> {
    redirect: string | undefined;
}
function NonAuthorize(props: Props) {
    const { authenticated } = useContext(Context);
    const { replace } = useNavigate();
    useEffect(() => { 
        if (authenticated) {
            replace(props.redirect || forbiddenRedirect);
        }
    }, []);
    return (
        authenticated ?
            null
            :
            <Fragment>{props.children}</Fragment>
    )
}

export default NonAuthorize