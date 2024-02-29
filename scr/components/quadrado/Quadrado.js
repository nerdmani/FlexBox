import React from "react";
import {View} from "react-native";

const QuadradoPequeno = () => {
    return(
        <View style = 
        {{
          width:50, 
          height: 50,
          backgroundColor: 'blue'
        }}/>
    );
}

const QuadradoMedio = () => {
    return(
        <View style = 
        {{
          width:100, 
          height: 100,
          backgroundColor: 'red'
        }}/>
    );
}

const QuadradoGrande = () => {
    return(
        <View style = 
        {{
          width:150, 
          height: 150,
          backgroundColor: 'green'
        }}/>
    );
}

const Quadrado = () => {
    return(
        <View>
            <QuadradoPequeno/>
            <QuadradoMedio/>
            <QuadradoGrande/>

        </View>
    )
}

export default Quadrado;