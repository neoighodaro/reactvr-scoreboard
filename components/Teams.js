import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-vr';


export default ({teamA, teamB}) => {
    return (
        <View>
            <Text
                style={{ 
                    backgroundColor: '#777879', 
                    fontSize: 0.8, 
                    layoutOrigin: [0.5, 1], 
                    textAlign: 'center', 
                    textAlignVertical: 'center', 
                    transform: [{ translate: [0, 1, -5],}],
                    width : 10 
                }}
            >{teamA} vs {teamB} !</Text>
        </View>
    );
}