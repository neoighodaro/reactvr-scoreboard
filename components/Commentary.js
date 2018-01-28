import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-vr';


export default ({ time, comment }) => {
    return (
        <View>
            <Text
                style={{
                    backgroundColor: '#ffffff',
                    color : '#333333',
                    fontSize: 0.8,
                    layoutOrigin: [0.5, 0],
                    paddingLeft: 0.2,
                    paddingRight: 0.2,
                    textAlign: 'left',
                    textAlignVertical: 'center',
                    transform: [{
                        translate: [1, 1, -15]
                    }],
                    width : 15
                }}
            >{time} - {comment}</Text>
        </View>
    );
}