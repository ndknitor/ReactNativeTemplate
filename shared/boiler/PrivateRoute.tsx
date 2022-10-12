import React, { Fragment, PropsWithChildren, useContext } from 'react';
import { View } from 'react-native';
import { forbiddenRedirect, unauthenticatedRedirect } from '../../utils/Redirect';
import Context from '../context/Context'
import useNavigate from '../hook/useNavigate';
interface Props extends PropsWithChildren<{}> {
    roles?: string[];
    unauthenticatedRedirect?: string;
    forbiddenRedirect?: string;
}
function PrivateRoute(props: Props) {
    const { authenticated, roles } = useContext(Context);
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
    return (
        authenticated ?
            isInRole() ?
                <>
                    {props.children}
                </>
                :
                () => replace(props.forbiddenRedirect || forbiddenRedirect)
            :
            () => replace(props.unauthenticatedRedirect || unauthenticatedRedirect)
    )
}

export default PrivateRoute
