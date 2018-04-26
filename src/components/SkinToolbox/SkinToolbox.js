import './style/index.less';
import React, { Component } from 'react';
import cx from 'classnames';
import Icon from '../Icon';
import { Tabs } from 'antd';
import $$ from 'cmn-utils';
import SideBarBox from './SideBarBox';
import NavBarBox from './NavBarBox';
const TabPane = Tabs.TabPane;

/**
 * 设置皮肤的右侧滑动的面板
 */
class SkinToolbox extends Component {
  onChangeSideColor = e => {
    this.props.onChangeTheme({
      ...this.props.theme,
      leftSide: e.target.value
    });
  };

  onChangeNavBarColor = e => {
    this.props.onChangeTheme({
      ...this.props.theme,
      navbar: e.target.value
    });
  };

  clearThemeStore = _ => {
    $$.removeStore('theme');
  }

  render() {
    const { collapsed, toggleSkinToolbox, theme } = this.props;

    const classnames = cx('skin-toolbox', {
      'skin-toolbox-close': collapsed
    });

    return (
      <div className={classnames}>
        <div className="panel">
          <div className="panel-head" onClick={toggleSkinToolbox}>
            <span className="panel-icon">
              <Icon type="gear" />
            </span>
            <span className="panel-title">设置您的主题</span>
          </div>
          <div className="panel-body">
            <Tabs defaultActiveKey="1" size="small">
              <TabPane tab="导航条" key="navbar">
                <h4>导航条样式</h4>
                <NavBarBox theme={theme} onChange={this.onChangeNavBarColor} />
              </TabPane>
              <TabPane tab="边栏" key="sidebar">
                <h4>边栏样式</h4>
                <SideBarBox theme={theme} onChange={this.onChangeSideColor} />
              </TabPane>
              <TabPane tab="布局" key="misc">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </div>
          <div className="panel-footer">
            <a className="btn-primary" onClick={this.clearThemeStore}>清理存储</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SkinToolbox;
