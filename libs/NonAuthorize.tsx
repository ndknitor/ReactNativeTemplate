import React, { Fragment, PropsWithChildren, useContext, useEffect } from 'react'
import { forbiddenRedirect } from '../utils/Redirect';
import Context from '../shared/context/Context'
import useRouter from '../shared/hook/useRouter';
interface Props extends PropsWithChildren<{}> {
    redirect: string | undefined;
}
function NonAuthorize(props: Props) {
    const { authenticated } = useContext(Context);
    const { replace } = useRouter();
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