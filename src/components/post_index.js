import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';
import { Link } from 'react-router';


class PostIndex extends Component {
    componentWillMount (){//call when react component will be render !!!for the first time!!!
        this.props.fetchPosts();
    }

    renderPosts(){
        return this.props.posts.map((post)=>{
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={'posts/' + post.id}>
                        <span className="pull-xs-right">
                            {post.categories}
                        </span>
                        <strong>
                            {post.title}
                        </strong>
                    </Link>

                </li>
            );
        })
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.post.all };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPosts: fetchPosts}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);