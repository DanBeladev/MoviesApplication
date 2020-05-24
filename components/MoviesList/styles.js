//import styleSheet for creating a css abstraction.
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    homeDiv: {
        //Flex: 1 gets all the space 
        flex: 1,
        //Since by default flexDiraction is column will center container children vertically within container.
        justifyContent: 'center',
        //Horizantally centers component is will center children horizontally within container.
        alignItems: 'center',
        //Have a backgroundColor of #000
        backgroundColor: '#000'
    },
    listItemContainer: {
        borderStyle: 'solid',
        borderColor: '#fff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    pokeItemHeader: {  
        color: '#fff',
        fontSize: 24,
    },
    pokeImage: {
        backgroundColor: 'transparent',
        height: 50,
        width: 50
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color:'white'
      },
    searchInput: {
        textAlign: 'center',
        height: 50,
        width: 300,
        maxWidth: '70%',
        borderBottomColor: 'grey',
        borderBottomWidth: 3,
        borderWidth: 3,
        borderRadius: 50,
        marginVertical: 10,
        backgroundColor: 'white',
      },
      inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,
      },
})

export default styles;