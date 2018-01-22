import React, { Component } from 'react';
import './site.css'
export class Article extends Component {

  render() {
    return (
      <div>
        <div class = "article">
          <h4> Hello WatchKit </h4>
          <p>Phasellus ut tellus tellus. Nulla ac turpis at ipsum viverra ultricies ac ac risus. Maecenas molestie blandit sapien at laoreet. Nulla at dui libero. In nec mauris eu risus posuere venenatis eu eget lorem. Proin ultrices arcu sit amet porta suscipit. Nullam erat eros, ornare quis lorem ut, vulputate malesuada massa. Sed ipsum libero, facilisis ut sem non, facilisis semper massa. Maecenas vel fermentum dolor.</p>
          <div class='comment-section'>
          <button> 12 comments </button>
          <button> 124 likes </button>
          </div>
        </div>

        <div class = 'article'>
          <h4> Introduction to Swift </h4>
          <p>Praesent condimentum justo vitae sem ultrices finibus. Fusce pretium justo quis tellus vestibulum, id tincidunt ex molestie. Aenean sagittis orci id blandit volutpat. Curabitur suscipit tincidunt diam sed commodo. Ut condimentum in magna vel viverra. Integer pellentesque, felis at tempor viverra, ante eros convallis neque, a eleifend augue nunc nec nisi. Maecenas a justo non elit finibus dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          <div class='comment-section'>
          <button> 19 comments </button>
          <button> 145 likes </button>
          </div>
        </div>

      </div>
    )
  }

}
