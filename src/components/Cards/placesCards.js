import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { Image, StyleSheet, Text, View,TouchableOpacity, Button } from 'react-native';
import placesActions from '../../../redux/actions/placesActions'


function PlacesCard(props) {
 
    useEffect(() => {
        props.getAllPlaces()
        // eslint-disable-next-line
    }, [])

    return (

        <>
    
            {props.places?.map((place, index) =>   
                <TouchableOpacity key={index} style={styles.container} 
                onPress={()=>props.navigation.navigate('Place', {
                   
                   id:place._id
                    })}>  
        
                    <Image source={{ uri: place.image }} style={styles.image} />
                    <Text style={styles.text}>{place.name}</Text>
                </TouchableOpacity>
            )}

        </>
    )
}
const mapDispatchToProps = {
    getAllPlaces: placesActions.getAllPlaces 

}

const mapStateToProps = (state) => {
    return {
        places: state.placesReducer.places

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesCard);

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