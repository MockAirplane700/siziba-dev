import { Text, View, SafeAreaView, StyleSheet} from "react-native";
import * as React from 'react';
import { FlatGrid,} from "react-native-super-grid";
import { IconButton, MD2Colors, Card} from "react-native-paper";

const HomePage = ({navigation}) => {
    // THE DATA REQUIRED TO BE DISPLAYED
    const [items, setItems] = React.useState(
        // INITIAL VALUE OF THE NEEDED VARIABLES
        [
            {
                "buttonCode" : () =>{navigation.navigate("FourTwentyExpress")},
                "buttonName": "420 Express",
                "buttonImage":"https://firebasestorage.googleapis.com/v0/b/siziba-dev.appspot.com/o/stock%20photos%2Fstock-vector-cannabis-logo-images-illustration-design-1939024486.jpg?alt=media&token=1f962a28-89c8-4f98-9f27-1b3fdaa738c8"
            },
            {
                "buttonCode" : () =>{},
                "buttonName": "MajorKill Minis",
                "buttonImage":"https://firebasestorage.googleapis.com/v0/b/siziba-dev.appspot.com/o/stock%20photos%2Fstock-vector-the-illustration-shows-a-medieval-knight-that-fights-he-wears-a-heavy-armor-and-he-holds-a-big-1102100144.jpg?alt=media&token=f28e6c60-21a9-469f-8a22-5bf05b292b26"
            },
            {
                "buttonCode" : () =>{},
                "buttonName": "Black Valley Comics",
                "buttonImage":"https://firebasestorage.googleapis.com/v0/b/siziba-dev.appspot.com/o/stock%20photos%2Fblack%20valley.png?alt=media&token=12eca366-ae60-470d-b564-ba6c4e0770ef"
            },
            {
                "buttonCode" : () =>{},
                "buttonName": "Eleos",
                "buttonImage":"https://firebasestorage.googleapis.com/v0/b/siziba-dev.appspot.com/o/stock%20photos%2Fstock-vector-family-care-logo-design-element-602916281.jpg?alt=media&token=0b0005e6-5766-40fe-9ad4-1963d06dc0d4"
            },
            {
                "buttonCode" : () =>{},
                "buttonName": "Adopt a Friend",
                "buttonImage":"https://firebasestorage.googleapis.com/v0/b/siziba-dev.appspot.com/o/stock%20photos%2Fstock-vector-dog-paw-and-human-hand-print-banner-love-pet-concept-1668922168.jpg?alt=media&token=d2458488-fdb8-4d37-9071-bce53b470f68"
            },
        ]
    );
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {/* This is how you comment */}  
                {/* Bloc text description describing how the application works */}
                <View>
                    <Text>Here lies the great works of Mthandazo the great!</Text>
                </View>
                {/** A dynamic Grid , scrollable, of buttons that lead to another page */}
                <FlatGrid
                    itemDimension={130}
                    data={items}
                    style={styles.gridView}
                    spacing={10}
                    renderItem={({item}) => (
                        <View>
                            <View>
                                <Card>
                                    <Card.Cover source = {{uri: item.buttonImage}}/>
                                    <Card.Actions>
                                        <IconButton
                                            icon={"eye"}
                                            color={MD2Colors.red500}
                                            onPress={item.buttonCode}
                                        />
                                    </Card.Actions>
                                </Card>
                            </View>
                        </View>
                    )}
                />
                <View>
  
                </View>
                {/** A basic footer like position displays dev info in the form of icon buttons in a row*/}
  
            </View>
        </SafeAreaView>
    );
}//end home page


const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1
    },
});
export default HomePage;