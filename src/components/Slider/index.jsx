import React, { Component } from 'react';

class Slider extends Component {
  // componentDidMount() {
  //   this.load_slider()
  // }
  // componentDidUpdate() {
  //   this.load_slider()
  // }  

  load_slider(){
    
    // //nivo slider
    window.$('.nivo-slider').nivoSlider({
      effect: 'random', // Specify sets like: 'fold,fade,sliceDown'
      slices: 15, // For slice animations
      boxCols: 8, // For box animations
      boxRows: 4, // For box animations
      animSpeed: 500, // Slide transition speed
      pauseTime: 5000, // How long each slide will show
      startSlide: 0, // Set starting Slide (0 index)
      directionNav: true, // Next & Prev navigation
      controlNav: false, // 1,2,3... navigation
      controlNavThumbs: false, // Use thumbnails for Control Nav
      pauseOnHover: false, // Stop animation while hovering
      manualAdvance: false, // Force manual transitions
      prevText: '', // Prev directionNav text
      nextText: '', // Next directionNav text
      randomStart: false, // Start on a random slide
      beforeChange: function() {}, // Triggers before a slide transition
      afterChange: function() {}, // Triggers after a slide transition
      slideshowEnd: function() {}, // Triggers after all slides have been shown
      lastSlide: function() {}, // Triggers when last slide is shown
      afterLoad: function() {} // Triggers when slider has loaded
    });
    
  }    
    
  render() {
    return (
    <div id="nivo-slider">
      <div className="nivo-slider">
        
        <img src="/assets/img/slides/nivo/bg-1.jpg" alt="" title="#caption-1" />
        
        <img src="/assets/img/slides/nivo/bg-2.jpg" alt="" title="#caption-2" />
        
        <img src="/assets/img/slides/nivo/bg-3.jpg" alt="" title="#caption-3" />
      
        <img src="/assets/img/slides/nivo/bg-4.jpg" alt="" title="#caption-4" />
        
        <img src="/assets/img/slides/nivo/bg-5.jpg" alt="" title="#caption-5" />
        
        <img src="/assets/img/slides/nivo/bg-6.jpg" alt="" title="#caption-6" />
      
      </div>
      <div className="">
            <div className="nivo-caption" id="caption-1">
              <div>
                <h2><strong>Login</strong></h2>
                <p>
                  Aqui nosso usuário poderá logar e acessar seu perfil com maiores informações.
                </p>
                
              </div>
            </div>
            
            <div className="nivo-caption" id="caption-2">
              <div>
                <h2><strong>Criar conta</strong></h2>
                <p>
                  Cadastre sua conta e crie seu perfil.
                </p>
              </div>
            </div>
            
            <div className="nivo-caption" id="caption-3">
              <div>
                <h2> <strong>Quem Somos</strong></h2>
                <p>
                  Saiba quais são a Missão, Visão e Valor da <strong>Helpec!</strong>
                </p>
                 </div>
            </div>
                
             <div className="nivo-caption" id="caption-4">
              <div>
                <h2><strong>Perfil</strong></h2>
                <p>
                  Veja e atualize os contatos e dados do seu perfil.
                </p>
              </div>
            </div>
            
             <div className="nivo-caption" id="caption-5">
              <div>
                <h2><strong>Saiba Mais</strong></h2>
                <p>
                  Quer se informar melhor do assunto, veja nosso material no Saiba Mais.
                </p>
              </div>
            </div>
            
             <div className="nivo-caption" id="caption-6">
              <div>
                <h2><strong>Primeiros Socorros</strong></h2>
                <p>
                  Aqui você conhece os primeiros passos para oferecer ajuda, saiba o que fazer ou não fazer.
                </p>
              </div>
            </div>
                

      </div>
    </div>
      
    );
  }
}

export default Slider;