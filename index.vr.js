import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import Teams from './components/Teams';
import Commentary from './components/Commentary';
import { Comments } from './models/comments';

export class scoreboard_vr extends React.Component {
  render() {
    const comments = new Comments().comments;
    return (
      <View style={{
        flex: 1, flexDirection: 'column', width: 2, alignItems: 'stretch'
      }}>
        <Pano source={asset('lille-pitch.jpg')}/>
        <Teams teamA={"Losc Lille"} teamB={"Monaco"} />
        {comments.map(function (comment) {
          return <Commentary time={comment.time} comment={comment.comment} />
        })}
      </View>
    );
  }
};

AppRegistry.registerComponent('scoreboard_vr', () => scoreboard_vr);
