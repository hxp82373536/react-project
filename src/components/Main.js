require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';


var imageDatas = require('../data/imageDatas.json');

//利用自执行函数，将图片名信息转成图片URL路径信息

imageDatas = ((imageDatasArr) => {
  for (var i = 0, j = imageDatasArr.length; i < j; i++) {
    let singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);


//单个图片组件
class ImgFigure extends React.Component {
  render() {
    return (
      <figure className="img-figure">
        <img src={this.props.data.imageURL} alt={this.props.data.title}/>
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>       
        </figcaption>
      </figure>
    );
  }
}


class GalleryByReactApp extends React.Component {
  render() {
    var controllerUnits = [],
      imgFigures = [];
    imageDatas.forEach((value, index) => {
      imgFigures.push(<ImgFigure data={value} key={index}/>);
    });
    return (
      <section className="stage" ref="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    );
  }
}


GalleryByReactApp.defaultProps = {};

export default GalleryByReactApp;
