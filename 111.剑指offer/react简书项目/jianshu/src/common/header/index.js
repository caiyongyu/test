import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    HeaderWrapper,
    Logo, 
    Nav, 
    NavItem, 
    NavSearch, 
    Addition, 
    Button, 
    SearchWrapper, 
    SearchInfo, 
    SearchInfoTitle, 
    SearchInfoSwitch,
    SearchInfoItem, 
} from './style.js';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';


class Header extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     focused: false
        // };
        // this.handleInputFocus = this.handleInputFocus.bind(this);
        // this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    getListArea = (show) => {
        if(show) {
            
            return (
                <SearchInfo>
                            <SearchInfoTitle>
                                热门搜索
                                <SearchInfoSwitch>换一批</SearchInfoSwitch>
                            </SearchInfoTitle>
                            <div>
                                {
                                    this.props.list.map((item) => {
                                        return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                    })
                                }
                                
                                
                            </div>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }


    render() {
        const { focused } = this.props;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={ focused }
                            timeout={ 200 }
                            classNames="slide"
                        >
                            <NavSearch 
                            className={focused ? 'focused' : ''}
                            onFocus={ this.props.handleInputFocus }
                            onBlur={ this.props.handleInputBlur }
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe637;</i>
                        { this.getListArea(focused) }
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting">
                    <i className="iconfont">&#xe611;</i>
                        写文章
                        </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list: state.get('header').get('list'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            // const action = {
            //     type: 'search_focus'
            // };
            dispatch(actionCreators.getList())
            const action = actionCreators.searchFocus();
            dispatch(action);
        },
        handleInputBlur() {
            const action = actionCreators.searchBlur();
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);