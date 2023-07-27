import { useDispatch, useSelector } from "react-redux"
import { onFinishLoading, onLoading, onSetData } from "../../store/dataSlice";
import controlApi from "../../api/controlApi";


export const useData = () => {

    const dispatch = useDispatch();

    const startGetData = async ( ) => {
        dispatch( onLoading() );
        try{

            const { data } = await controlApi.get('/extractions');
            dispatch( onFinishLoading() );
            dispatch( onSetData( data.data ))
            
            return { 
                data: data.data
            }
        }catch(error){
            dispatch( onFinishLoading() );

            console.log(error);
        }
    }

    return {
        startGetData
    }


}