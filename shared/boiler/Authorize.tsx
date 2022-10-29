import React, { PropsWithChildren, useContext, useEffect, useLayoutEffect } from 'react';
import { forbiddenRedirect, unauthenticatedRedirect } from '../../utils/Redirect';
import Context from '../context/Context'
import useNavigate from '../hook/useNavigate';
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
        if (!initLoading) {
            if (!authenticated) {
                replace(props.unauthenticatedRedirect || unauthenticatedRedirect);
            }
            if (!isInRole()) {
                replace(props.forbiddenRedirect || forbiddenRedirect)
            }
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
