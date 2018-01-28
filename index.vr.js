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
  constructor(props) {
    super(props);

    this.state = {
      comment_index: 0,
    };
  }
  
  componentDidMount(){
    setInterval(() => {
      this.setState({
        comment_index : this.state.comment_index+3 
      })   
    }, 2000);
  };
  
  render() {
    let comment_list = new Comments().comments;
    let comment_length = comment_list.length; 
    let comments = (this.state.comment_index < comment_length ) ? 
      comment_list.slice(this.state.comment_index, this.state.comment_index+3) : 
      comment_list.slice(comment_length-1, comment_length);
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
