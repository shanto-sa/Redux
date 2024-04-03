import React from "react";
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

const MainComponent =()=>{

    const count = useSelector(state =>state.count);
    const dispatch = useDispatch();

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Button  title="Increment" onPress={()=>dispatch({type:'INCREMENT'})}/>
              <Text>{'\n'}Counter: {count}{'\n'}</Text>
            <Button title="Decremnt" onPress={()=>dispatch({type:'DECREMENT'})} />
        </View>
    );
};

export default MainComponent;