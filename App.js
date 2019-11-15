/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,ImageBackground} from 'react-native';




export default class App extends Component {
  state ={
    player_h:100,
    enemy_h:100,
    enemy_button:false,
    player_button:false,
    player_image :require("./images/player_good.gif"),
    enemy_image:require("./images/enemy_good.gif")



  }


  render() {
    return (

      <ImageBackground
        source={require("./images/background.jpeg")}
        style={styles.backgroundImage}
      >

      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
       
       <View style={{flexDirection:"row",marginTop:10,marginLeft:2,}}>
        <View style={{justifyContent:"center",marginLeft:10}}
        ><View style={styles.bar}>
        <Text style={styles.text}>Health:{this.state.enemy_h}</Text>
        </View>


      <View style={{flexDirection:"row"}}>
      
      <TouchableOpacity  disabled={this.state.enemy_button}
        onPress={() => {
          
          this.setState({player_h: this.state.player_h-5,enemy_button:true,player_button:false})
          if(this.state.player_h<50){
            this.setState({player_image:require("./images/player_bad.gif")})
          }
          else{
            this.setState({player_image:require("./images/player_good.gif")})
          }
          if(this.state.enemy_h<50){
            this.setState({enemy_image:require("./images/enemy_bad.gif")})
          }
          else{
            this.setState({enemy_image:require("./images/enemy_good.gif")})
          }
        }}
      >
      <Text style={styles.button}>Attack!</Text>
      </TouchableOpacity>

      <TouchableOpacity disabled={this.state.enemy_button}
      onPress={() => {
        
        this.setState({player_h: this.state.player_h-20,enemy_button:true,player_button:false})
        if(this.state.player_h<50){
          this.setState({player_image:require("./images/player_bad.gif")})
        }
        else{
          this.setState({player_image:require("./images/player_good.gif")})
        }
        if(this.state.enemy_h<50){
          this.setState({enemy_image:require("./images/enemy_bad.gif")})
        }
        else{
          this.setState({enemy_image:require("./images/enemy_good.gif")})
        }
      }}>
      <Text style={styles.button}>Fireball!</Text>
      </TouchableOpacity>

      <TouchableOpacity disabled={this.state.enemy_button}
      onPress={() => {
        this.setState({enemy_h: this.state.enemy_h+5,enemy_button:true,player_button:false})
        if(this.state.player_h<50){
          this.setState({player_image:require("./images/player_bad.gif")})
        }
        else{
          this.setState({player_image:require("./images/player_good.gif")})
        }
        if(this.state.enemy_h<50){
          this.setState({enemy_image:require("./images/enemy_bad.gif")})
        }
        else{
          this.setState({enemy_image:require("./images/enemy_good.gif")})
        }
      }}>
      <Text style={styles.button}>Heal!</Text>
      </TouchableOpacity>
       
      </View>
      </View>

      <View style={{marginLeft:20}}>
      <ImageBackground
              source={this.state.enemy_image}
              style={styles.icon}
            />
      </View>
      

      </View>

      <View style={{flexDirection:"row",marginTop:10,marginLeft:2,}}>
      <ImageBackground
              source={this.state.player_image}
              style={styles.icon}
            />
      <View style={{justifyContent:"center",marginLeft:20}}>
        <View style={styles.bar}>
        <Text style={styles.text}>Health:{this.state.player_h}</Text>
        </View>


      <View style={{flexDirection:"row"}}>
      
      <TouchableOpacity disabled={this.state.player_button}
      onPress={() => {
        this.setState({enemy_h: this.state.enemy_h-5,enemy_button:false,player_button:true})
        if(this.state.player_h<50){
          this.setState({player_image:require("./images/player_bad.gif")})
        }
        else{
          this.setState({player_image:require("./images/player_good.gif")})
        }
        if(this.state.enemy_h<50){
          this.setState({enemy_image:require("./images/enemy_bad.gif")})
        }
        else{
          this.setState({enemy_image:require("./images/enemy_good.gif")})
        }
      }}
      >
      <Text style={styles.button}>Attack!!</Text>
      </TouchableOpacity>

      <TouchableOpacity disabled={this.state.player_button}
      onPress={() => {
        this.setState({enemy_h: this.state.enemy_h-20,enemy_button:false,player_button:true})
        if(this.state.player_h<50){
          this.setState({player_image:require("./images/player_bad.gif")})
        }
        else{
          this.setState({player_image:require("./images/player_good.gif")})
        }
        if(this.state.enemy_h<50){
          this.setState({enemy_image:require("./images/enemy_bad.gif")})
        }
        else{
          this.setState({enemy_image:require("./images/enemy_good.gif")})
        }
      }}>
      <Text style={styles.button}>Fireball!</Text>
      </TouchableOpacity>

      <TouchableOpacity disabled={this.state.player_button}
      onPress={() => {
        this.setState({player_h: this.state.player_h+5,enemy_button:false,player_button:true})
        if(this.state.player_h<50){
            this.setState({player_image:require("./images/player_bad.gif")})
          }
          else{
            this.setState({player_image:require("./images/player_good.gif")})
          }
          if(this.state.enemy_h<50){
            this.setState({enemy_image:require("./images/enemy_bad.gif")})
          }
          else{
            this.setState({enemy_image:require("./images/enemy_good.gif")})
          }
      }}>
      
      <Text style={styles.button}>Heal!</Text>
      </TouchableOpacity>
       
      </View>
      

      </View>

      </View>


      </View>   
      </ImageBackground>
      
    );
  }
}




const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: 12,
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
  },
  bar:{
    width:160,
    height:30,
    backgroundColor:"green",
    marginBottom: 5,
    marginLeft: 50,
    justifyContent:"center",
    borderWidth: 1,
    color: 'white',
   

  },
  text:{
    fontSize:30,
    textAlign:'center',
  },
  icon:{
    height:167,
    width:122
  },
  backgroundImage: {
    flex: 10,
    resizeMode: "cover"
  }
  
});

