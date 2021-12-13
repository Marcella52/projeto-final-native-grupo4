import {StyleSheet} from 'react-native';



const styles = StyleSheet.create ({

    containerCards: {
        paddingTop: 210,
        backgroundColor: '#E5E5E5',

    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        
      
       

    } ,

    segundoContainer: {
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#F4F4F4',
        width: 300,
        height: 'auto',
        marginVertical:20,
        paddingHorizontal: 16,
        paddingVertical: 32,
        
        
        
    },

    button: {
        backgroundColor: '#01091d',
        paddingVertical: 14,
        height: 44,
        width: 250,
        borderRadius: 6,
        marginTop: 32,
        
       
            
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 15,
    },
    image: {   
        width: 230,
        height: 130,
    },
    Texto: {
        fontSize: 25,
        color: '#000',
        paddingTop: 30,
        width: '100%',
        
    },
    subTexto: {
        width: '100%',
        paddingTop:15,

    },
    textoPreco: {
        fontSize: 30,
        color: '#bd8a08',
        marginTop:50,
        width: '100%',
    }






});



export default styles;


