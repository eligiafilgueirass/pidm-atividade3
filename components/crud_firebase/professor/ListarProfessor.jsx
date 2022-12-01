import { View, Text, SafeAreaView, FlatList, Button } from "react-native";
import { useEffect, useState } from "react";
import { estilos } from "../css/MeuCSS";

import ProfessorService from "../service/ProfessorService";
import { firestoreDb } from "../firebase/firebase_config";

const ListarProfessor = (props) => {
  const [professores, setProfessores] = useState([]);
  const [lista, setLista] = useState(false);

  useEffect(() => {
    ProfessorService.listar(firestoreDb, (professores) => {
      setProfessores(professores);
    });
  }, []);

  const removerProfessorr = (id) => {
    ProfessorService.remover(
      firestoreDb,
      (resultado) => {
        let professoresTemp = professores;
        for (let i = 0; i < professoresTemp.length; i++) {
          if (professoresTemp[i].id === id) {
            professoresTemp.splice(i, 1);
            break;
          }
        }
        setProfessores(professoresTemp);
        setLista(!lista);
      },
      id
    );
  };

  const removerProfessor = (id) => {
    ProfessorService.remover(
      firestoreDb,
      (resultado) => {
        let professorResultado = professores.filter(
          (Professor) => Professor.id !== id
        );
        setProfessores(professorResultado);
      },
      id
    );
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.cabecalho}>Listar Professors</Text>
      {console.log(professores)}
      <SafeAreaView>
        <FlatList
          data={professores}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Text style={{ width: "20%", fontWeight: "bold" }}>
                  {item.nome}
                </Text>
                <Text style={{ width: "25%" }}>{item.curso}</Text>
                <Text style={{ margin: 5 }}>{item.salario}</Text>
                <View style={{ margin: 5 }}>
                  <Button
                    title="Editar"
                    onPress={() =>
                      props.navigation.navigate("EditarProfessor", {
                        id: item.id,
                      })
                    }
                  />
                </View>
                <View style={{ margin: 5 }}>
                  <Button
                    title="remover"
                    onPress={() => removerProfessorr(item.id)}
                  />
                </View>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

export default ListarProfessor;