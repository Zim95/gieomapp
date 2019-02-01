import React, {Component} from 'react';
import {connect} from 'react-redux';

//import components
import {Layout,Content} from 'react-mdl';
import Header from '../components/Header/Header';
import Drawer from '../components/Drawer/Drawer';

class LayoutMain extends Component{
    render(){
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header title={this.props.title}/>
                    <Drawer title={this.props.title}/>
                    <Content>
                        {this.props.children}
                    </Content>
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        title: state.beer.title
    };
};


export default connect(mapStateToProps)(LayoutMain);