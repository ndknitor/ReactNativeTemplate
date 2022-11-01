import { useContext } from "react";
import useEffectOnce from "../../hook/useEffectOnce";
import Context from "../Context";

export default function useInit() {
    const { setInitLoading, initLoading } = useContext(Context);
    useEffectOnce(() => {
        if (initLoading) {
            setInitLoading(false);
        }
    });
}