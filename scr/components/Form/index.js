import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import ResultIMC from "./ResultIMC/";
import styles from "./style";

export default function Form(){

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageIMC, setMessageIMC]= useState("Preencha o peso e altura")
const [imc, setIMC]= useState(null)
const [TextButton, setTextButton]= useState("Calcular")
const [errorMessage, setErrorMessage]= useState(null)

function verificationIMC(){
  if (imc == null){
    setErrorMessage("*Campo obritatório*")
  }
}

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
      setErrorMessage(null)
      return
    }
    verificationIMC()
    setIMC(null)
    setTextButton("Calcular")
    setMessageIMC("Preencha o peso e altura")
}

    return(
        <View style={styles.formContext}>
          <View style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
              <TextInput
                style={styles.input} 
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.74"
                keyboardType="numbers-and-punctuation"
              />

            <Text style={styles.formLabel}>Peso</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
              <TextInput 
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 75.36"
                keyboardType="numbers-and-punctuation"
              />
              <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={() =>{
                  validationIMC()
                }}
              >
                <Text style={styles.textButtonCalculator}>{TextButton}</Text>
              </TouchableOpacity>
          </View>
          <ResultIMC messageResultIMC={messageIMC} ResultIMC={imc}/>
        </View>
    );
}