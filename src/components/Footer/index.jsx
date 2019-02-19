import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="span3">
            <div className="widget">
              <h5 className="widgetheading">Browse pages</h5>
              <ul className="link-list">
                <li><a href="#">About our company</a></li>
                <li><a href="#">Our services</a></li>
                <li><a href="#">Meet our team</a></li>
                <li><a href="#">Explore our portfolio</a></li>
                <li><a href="#">Get in touch with us</a></li>
              </ul>
            </div>
          </div>
          <div className="span3">
            <div className="widget">
              <h5 className="widgetheading">Important stuff</h5>
              <ul className="link-list">
                <li><a href="#">Press release</a></li>
                <li><a href="#">Terms and conditions</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Career center</a></li>
                <li><a href="#">Flattern forum</a></li>
              </ul>
            </div>
          </div>
          <div className="span3">
            <div className="widget">
              <h5 className="widgetheading">Flickr photostream</h5>
              <div className="flickr_badge">
                <script type="text/javascript" src="http://www.flickr.com/badge_code_v2.gne?count=8&amp;display=random&amp;size=s&amp;layout=x&amp;source=user&amp;user=34178660@N03"></script>
              </div>
              <div className="clear">
              </div>
            </div>
          </div>
          <div className="span3">
            <div className="widget">
              <h5 className="widgetheading">Get in touch with us</h5>
              <address>
    				<strong>Flattern studio, Pte Ltd</strong><br/>
    				 Springville center X264, Park Ave S.01<br/>
    				 Semarang 16425 Indonesia
    	 		</address>
              <p>
                <i className="icon-phone"></i> (123) 456-7890 - (123) 555-7891 <br/>
                <i className="icon-envelope-alt"></i> email@domainname.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="sub-footer">
        <div className="container">
          <div className="row">
            <div className="span6">
              <div className="copyright">
                <p>
                  <span>&copy; Flattern - All right reserved.</span>
                </p>
                <div className="credits">
                  Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
              </div>
            </div>
            <div className="span6">
              <ul className="social-network">
                <li><a href="#" data-placement="bottom" title="Facebook"><i className="icon-facebook icon-square"></i></a></li>
                <li><a href="#" data-placement="bottom" title="Twitter"><i className="icon-twitter icon-square"></i></a></li>
                <li><a href="#" data-placement="bottom" title="Linkedin"><i className="icon-linkedin icon-square"></i></a></li>
                <li><a href="#" data-placement="bottom" title="Pinterest"><i className="icon-pinterest icon-square"></i></a></li>
                <li><a href="#" data-placement="bottom" title="Google plus"><i className="icon-google-plus icon-square"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
  }
}

export default Footer;