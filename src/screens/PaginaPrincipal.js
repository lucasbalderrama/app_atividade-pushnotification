// Lucas Randal N°18 e Flavia Glenda N°04
import React, { useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Alert
} from 'react-native';
import * as Notifications from 'expo-notifications';

export default function PaginaPrincipal({ navigation }) {
  const redirecionarListarJogadores = () => {
    navigation.navigate('ListarJogadores');
  };

  const redirecionarUploadIMG = () => {
    navigation.navigate('UploadImagens');
  };

  const redirecionarUploadVideo = () => {
    navigation.navigate('UploadVideos');
  };

  useEffect(() => {
    async function verificarPermissao() {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        Alert.alert(
          "Permissão negada",
          "Ative as notificações nas configurações para receber alertas."
        );
      }
    }

    verificarPermissao();

    const subscription = Notifications.addNotificationReceivedListener(notification => {
      console.log("Notificação recebida:", notification);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <ImageBackground source={require('../assets/background2.jpg')} style={styles.background}>
      <ScrollView style={styles.container}>
        <View style={styles.barraSuperior}>
          <Text style={styles.titulo}>Página Principal</Text>
        </View>

        <View style={styles.atalhosCentralizados}>
          <Pressable style={styles.atalho} onPress={redirecionarListarJogadores}>
            <Text style={styles.textoAtalho}>Listar Jogadores</Text>
          </Pressable>
          <Pressable style={styles.atalho} onPress={redirecionarUploadIMG}>
            <Text style={styles.textoAtalho}>Upload IMG</Text>
          </Pressable>
          <Pressable style={styles.atalho} onPress={redirecionarUploadVideo}>
            <Text style={styles.textoAtalho}>Upload Vídeos</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '115%',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  barraSuperior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    marginRight: 5,
    marginTop: 5,
  },
  atalho: {
    backgroundColor: "red",
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    elevation: 2,
    color: '#fff',
    textAlign: 'center',
    width: "50%",
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    fontFamily: 'Helvetica',
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.8,
  },
  atalhosCentralizados: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textoAtalho: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
