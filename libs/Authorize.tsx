import React, { PropsWithChildren, useContext, useEffect } from 'react';
import { forbiddenRedirect, unauthenticatedRedirect } from '../utils/Redirect';
import Context from '../shared/context/Context'
import useNavigate from '../shared/hook/useNavigate';
interface Props extends PropsWithChildren<{}> {
    roles?: string[];
    unauthenticatedRedirect?: string;
    forbiddenRedirect?: string;
}
function Authorize(props: Props) {
    const { authenticated, roles, initLoading } = useContext(Context);
    const { replace } = useNavigate();
    const isInRole = () => {
        if (!props.roles) {
            return true;
        }
        for (let i = 0; i < roles.length; i++) {
            const element = roles[i];
            if (props.roles.includes(element)) {
                return true;
            }
        }
        return false;
    }
    useEffect(() => {
        if (initLoading) {
            return;
        }
        if (!authenticated) {
            replace(props.unauthenticatedRedirect || unauthenticatedRedirect);
            return;
        }
        if (!isInRole()) {
            replace(props.forbiddenRedirect || forbiddenRedirect)
            return;
        }

    }, [initLoading]);
    return (
        !initLoading ?
            authenticated ?
                isInRole() ?
                    <>
                        {props.children}
                    </>
                    :
                    null
                :
                null
            :
            null
    )
}

export default Authorize
