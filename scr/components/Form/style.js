import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  formContext: {
    flex:1,
    backgroundColor:"#ffffff",
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    alignItems:"center",
    paddingTop:30,
  },
  form:{
    width:"100%",
    height:"auto",
    marginTop:30,
  },
  formLabel:{
    color:"#000000",
    fontSize:18,
    paddingLeft:20,
  },
  input:{
    width:"94%",
    borderRadius:50,
    backgroundColor:"#f6f6f6",
    height:40,
    margin:12,
    paddingLeft:10,
  },
  buttonCalculator:{
    borderRadius:55,
    alignItems:"center",
    justifyContent:"center",
    width:"90%",
    backgroundColor:"#0000FF",
    paddingTop:15,
    paddingBottom:15,
    marginLeft:25,
    margin:25,
  },
  textButtonCalculator:{
    fontSize:20,
    color:"#ffffff"
  },
  errorMessage:{
    fontSize:12,
    color:"red",
    fontWeight:"bold",
    paddingLeft:25,
  }
});

  export default styles