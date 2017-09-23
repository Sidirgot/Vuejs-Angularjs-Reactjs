import React, { Component } from 'react';
import './Faq.css';
import axios from 'axios';

class Faq extends Component {

  constructor(props) {
    super(props);

    this.state = {
      Faqs: []
    };
  }

  componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(res => {
              const Faqs = res.data.slice(0,10);
              this.setState({ Faqs });
          })
  }

  render() {
    return (
      <div>
      <div className="container">
        <section className="section">
          <h1 className="title has-text-centered">FAQ</h1>
          <h2 className="subtitle is-4 has-text-centered">Loream ipsum blah blah blah</h2>

          <div className="columns">
            <div className="column is-one-third" >
              <div className="card">
                <div className="card-content">
                  <p className="title">{ Faq.title }</p>
                  <p className="answer"> { Faq.body }</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
    );
  }
}

export default Faq;
