import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native"
import styles from "./style";

export default function ResultIMC(props){

  const onShare = async () => {
      const result = await Share.share({
        message:
        "Aqui esta seu resultado do IMC: " + props.ResultIMC,
      });
  };

    return(
        <View style={styles.resultIMC}>
            <View style={styles.boxSharebutton}>
              {props.ResultIMC != null ?
              <TouchableOpacity
                onPress={onShare}
                style={styles.shared}>
                <Text style={styles.sharedText}>Share</Text>
              </TouchableOpacity>
              :
              <View/>
              }
            </View>
          <Text style={styles.information}>{props.messageResultIMC}</Text>
          <Text style={styles.numberIMC}>{props.ResultIMC}</Text>
        </View>
    );
}