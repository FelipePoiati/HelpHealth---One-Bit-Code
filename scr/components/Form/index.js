import React, { useState } from "react";
import { TextInput, View, Text, Button } from "react-native"
import ResultIMC from "./ResultIMC/"

export default function Form(){

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageIMC, setMessageIMC]= useState("Preencha o peso e altura")
const [imc, setIMC]= useState(null)
const [TextButton, setTextButton]= useState("Calcular")

function imcCalculator(){
    return setIMC((weight/(height*height)).toFixed(2))
}

function validationIMC(){
    if(weight != null && height != null){
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageIMC("Seu IMC é igual:")
      setTextButton("Calcular Novamente")
      return
    }
    setIMC(null)
    setTextButton("Calcular")
    setMessageIMC("Preencha o peso e altura")
}

    return(
        <View>
          <View>
            <Text>Altura</Text>
              <TextInput 
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.74"
                keyboardType="numeric"
              />
            <Text>Peso</Text>
              <TextInput 
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 75.365"
                keyboardType="numeric"
              />
              <Button
                onPress={() => validationIMC()}
               title={TextButton}
               />
          </View>
          <ResultIMC messageResultIMC={messageIMC} ResultIMC={imc}/>
        </View>
    );
}