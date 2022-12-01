import { View, Text, Button } from "react-native";
import { estilos } from "../css/MeuCSS";

const HomeProfessor = (props) => {
  return (

    <View style={estilos.container}>
      <Text style={estilos.cabecalho}>Professor Home</Text>
      <View style={estilos.botao}>
        <Button
          title="Criar Professor"
          onPress={() => props.navigation.navigate("CriarProfessor")}
        />
      </View>
      
      <View style={estilos.botao}>
        <Button
          title="Listar Professor"
          onPress={() => props.navigation.navigate("ListarProfessor")}
        />
      </View>
    </View>
  );
};