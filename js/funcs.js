$(document).ready(function(){
  $('.action-btn').on('mousedown', function(){
    $('#modal1').openModal();
  })
})

var Cube = React.createClass({
  getInitialState: function(){
    return {
      degrees:1
    }
  },

  rotate:function(){
    var degrees = this.state.degrees
    var cube = document.getElementsByClassName('bar')[0];
    var transform = 'rotate3d('+ degrees +', '+ degrees +', '+ degrees +', '+degrees+'deg)';
    console.log(transform);
    cube.style.transform = transform
    this.setState({
      degrees:degrees+1
    })
    setTimeout(this.rotate, 30)
  },
  componentDidMount: function(){
      this.rotate()
  },
	render: function(){
    	return (<div id="main">
                    <div className="perspective">
                        <div className="bar">
                            <div className="bar-face roof"></div>
                            <div className="bar-face front"></div>
                            <div className="bar-face right"></div>
                            <div className="bar-face back"></div>
                            <div className="bar-face left"></div>
                            <div className="bar-face floor"></div>
                        </div>
                    </div>
				</div>)
    }
})

React.render(<div> <Cube /> </div>, document.getElementById('container'));
