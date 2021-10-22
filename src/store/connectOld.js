//HOC

import React from 'react';
import { StateContext} from './ProviderOld';

const connect = selectState => Component => {
  class Connect extends React.Component{
//context is store
    constructor(props, context) {
      super(props);
      this.state = {
        sliceData: selectState(context.getState()) //get chosen data from component
      }
      this.unsubscribe = context.subscribe(() => this.handleStateChange(context));
    }

      handleStateChange = (context) => {
       const rootState = context.getState();
       this.setState({sliceData: selectState(rootState)});
      }

      componentWillUnmount() {
        this.unsubscribe(); //unsubscribe from context when page has been changed
      }

    render() {
      const { dispatch } = this.context;
      const { sliceData } = this.state; //get chosen data from component
      return <Component {...sliceData} dispatch={dispatch}></Component>
    }
  }

  Connect.contextType = StateContext;
  return Connect;
} 

export default connect;

