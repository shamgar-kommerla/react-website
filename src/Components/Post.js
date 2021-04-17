import React,{Component} from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import {deletePost} from '../actions/postActions';

class Post extends Component {    
    handleDelete = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');    }  
    render() {
        // console.log(this.props)
        const post = this.props.post ? (
            <div className="center post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>
                    {this.props.post.body}
                </p>
                <button className="btn grey" onClick={this.handleDelete}>Delete post</button>
            </div>
        ) :
        (
            <div className="center">
                Loading the post .....
            </div>
        )

        return(
            <div className="container">
               {post} 
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps);
    //  console.log(state.posts.find(post => post.id === 3));
    // console.log(typeof(ownProps.match.params.post_id), typeof(state.posts.find(post => post.id === 3).id));
    let id = parseInt(ownProps.match.params.post_id); //We've converted it into int becoz it was initially string. (I don't know why)
    return {
        post : state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
       deletePost: (id) => {dispatch(deletePost(id))}
   }
}



export default connect(mapStateToProps,mapDispatchToProps)(Post);