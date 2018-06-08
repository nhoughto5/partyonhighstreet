import React from 'react';
import HomePage from '../components/home-page';
import TitlePage from '../components/title-page';
import { timer } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      classes: '',
      showHome: false,
    };
  }

  get isFirstVisit() {
    if(typeof sessionStorage !== 'undefined'){
      return sessionStorage.getItem('shownTitle') == null;
    }else {
      return false;
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.isFirstVisit == true || this.isFirstVisit == true;
  }

  componentDidMount() {
    if(true){
      console.log("dhsdfh");
      timer(4000).pipe(
        tap((x) => this.setState({
          classes: 'title-animation-div animationFade',
          showHome: true,
          shouldRenderTitle: true,
        })),
        delay(3000),
      ).subscribe(
        () => {
          this.setState({
            classes: 'title-animation-div animationFade title-no-show',
            shouldRenderTitle: false,
          });
          this.forceUpdate();
          sessionStorage.setItem('shownTitle', true);
          this.setState({ 
            isFirstVisit: this.isFirstVisit,
          });
        }
      );
    }
  }
  
  render() {
    return (
      <div>
        {this.isFirstVisit && <TitlePage classes={this.state.classes} shouldRender={this.state.shouldRenderTitle} />}
        {this.isFirstVisit && this.state.showHome && <HomePage/>}
        {!this.isFirstVisit && <HomePage/>}
      </div>
    );
  }
}

export default IndexPage;
