import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListarEstudante from './estudante/ListarEstudante';
import CriarEstudante from './estudante/CriarEstudante';
import HomeEstudante from './estudante/HomeEstudante';
import LoginUsuario from './usuario/LoginUsuarios';

import HomeProfessor from "./professor/HomeProfessor";
import CriarProfessor from "./professor/CriarProfessor";
import ListarProfessor from "./professor/ListarProfessor";
import EditarProfessor from "./professor/EditarProfessor";

const Stack = createNativeStackNavigator()

const RoutesCrud = ()=> {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='LoginUsuario' 
                component={LoginUsuario} 
                options={{title:'Login Usuário'}}/>

            <Stack.Screen 
                name='HomeEstudante' 
                component={HomeEstudante} 
                options={{title:'Estudante Home'}}/>

            <Stack.Screen 
                name='ListartEstudante' 
                component={ListarEstudante} 
                options={{title:'Listar Estudantes'}}/>

            <Stack.Screen 
                name='CriarEstudante' 
                component={CriarEstudante} 
                options={{title:'Criar Estudante'}}/>

            <Stack.Screen
            name="HomeProfessor"
            component={HomeProfessor}
            options={{ title: "Home Professor" }}/>

            <Stack.Screen
                name="CriarProfessor"
                component={CriarProfessor}
                options={{ title: "Criar Professor" }} />

            <Stack.Screen
                name="ListarProfessor"
                component={ListarProfessor}
                options={{ title: "Listar Professors" }}/>

            <Stack.Screen
                name="EditarProfessor"
                component={EditarProfessor}
                options={{ title: "Editar Professor" }}/>
        </Stack.Navigator>
    )
}

export default RoutesCrud