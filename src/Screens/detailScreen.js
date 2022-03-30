import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, View, StyleSheet, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import placesActions from '../../redux/actions/placesActions';
import Stack from '../Navigation/Stack'

function DetalleScreen(props) {
    const [place, setPlace] = useState()
    const { id } = props.route.params

    useEffect(() => {
        props.getOnePlace(id)
            .then(response => setPlace(response.data.response.place))
            
            
    }, [id])

    useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerRight: () => (
              <Button  onPress={() => props.navigation.navigate('Comments')}
              title="Comments"
          />
            ),
          });
    },[])
    
    return (
        <>
        
           
            <View style={styles.container}>
                <Image source={{ uri: place?.image }} style={styles.image} />
                <Text style={styles.text}>{place?.name}</Text>
                <Text>{place?.description}</Text>
            </View>
        </>
    );
}
const mapDispatchToProps = {
    getOnePlace: placesActions.getOnePlace,
}


export default connect(null, mapDispatchToProps)(DetalleScreen);

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        height: 300,
        marginBottom: 10,

    },
    image: {
        width: "100%",
        height: "100%",

    },
    text: {
        width: "100%",
        color: "white",
        fontSize: 20,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0",
        zIndex: 10,
        position: "absolute",
        top: "40%"
    }
});