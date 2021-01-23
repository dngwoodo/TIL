export {}
{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(resourceLoadState: ResourceLoadState){
    switch(resourceLoadState.state){
      case 'loading':
        console.log(`👀 ${resourceLoadState.state}...`);
        break;
      case 'success':
        console.log(`😃 ${resourceLoadState.response.body}`);
        break;
      case 'fail':
        console.log(`😱 ${resourceLoadState.reason}`);
        break;
      default:
        throw new Error(`uknown state: ${resourceLoadState}`);
        
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
