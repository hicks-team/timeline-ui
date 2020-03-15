import React, {useEffect, useState} from 'react';
import './App.css';
import 'bulma/css/bulma.min.css'
import { DataSet, Timeline } from "vis-timeline/standalone";
import 'vis-timeline/styles/vis-timeline-graph2d.min.css';

function App() {

  const [options, setOptions] = useState();
  const [items, setItems] = useState();
  const [container, setContainer] = useState();
  const [timeline, setTimeline] = useState();

  useEffect(() => {
    const options = {
      width: '100%',
      height: '100%',
      editable: true,
      stack: true,
      showMajorLabels: true,
      showCurrentTime: true,
      zoomMin: 1000000,
      min: new Date('1970-03-15'),
      max: new Date('2025-03-15'),
      type: 'background',
      format: {
        minorLabels: {
          minute: 'h:mma',
          hour: 'ha'
        }
      }
    };
    setOptions(options);

    // DOM element where the Timeline will be attached
    var container = document.getElementById('visualization');
    setContainer(container);
    
    // Create a DataSet (allows two way data-binding)
    var items = new DataSet([
      {id: 1, group: 7, type: 'range', content: 'Summer Vacation', start: new Date(2014, 8, 15), end: new Date(2014, 8, 31)},
      {id: 2, group: 7, type: 'range', content: 'Short Vacation', start: new Date(2017, 10, 12), end: new Date(2017, 10, 15)},
      {id: 3, group: 1, type: 'point', content: 'Bday', start: new Date(1986, 1, 1), title: new Date(1986, 1, 1)},
      {id: 4, group: 8, type: 'range', content: 'Doggie', start: '2008-04-16', end: '2014-04-19', style: 'background-color:lightgreen;'},
      {id: 5, group: 9, type: 'range', content: 'Cat', start: '2005-04-25', end: '2011-05-19', style: 'background-color:lightgreen;'},
      {id: 6, group: 4, type: 'range', content: 'High School', start: '2001-04-25', end: '2005-05-19'},
      {id: 7, group: 4, type: 'range', content: 'College', start: '2006-04-25', end: '2010-05-19'},
      {id: 8, group: 5, type: 'range', content: 'Second Job', start: '2012-04-25', end: '2018-05-19'},
      {id: 9, group: 5, type: 'range', content: 'First Job', start: '2008-04-25', end: '2010-05-19'},
      {id: 10, group: 6, type: 'range', content: 'Client Meeting in Sacramento', start: '2017-03-15', end: '2017-03-20'},
      {id: 11, group: 8, type: 'range', content: 'Doggie 2', start: '2011-04-16', end: '2020-04-19', style: 'background-color:lightgreen;'},
      {id: 12, group: 9, type: 'range', content: 'Cat 2', start: '2010-04-25', end: '2019-05-19', style: 'background-color:lightgreen;'},
      {id: 13, group: 2, type: 'box', content: 'Get Passport', start: '2007-08-25', style: 'background-color:lightblue;'},
    ]);

    var groups = new DataSet([
          {id: 1, content: 'Life Events'},
          {id: 2, content: 'Travel', nestedGroups: [6, 7]},
          {id: 3, content: 'Pets', nestedGroups: [8, 9]},
          {id: 4, content: 'Education'},
          {id: 5, content: 'Jobs'},
          {id: 6, content: 'Business Trips'},
          {id: 7, content: 'Vacations'},
          {id: 8, content: 'Dogs'},
          {id: 9, content: 'Cats'},
        ]);

    // Create a Timeline
    let timeline = new Timeline(container, items, groups, options);
    setTimeline(timeline);
  }, []);

  return (
    <div className="App">
      <Hero />

      <section className='section'>
        <div className='container'>
          <div id="visualization" style={{width:'100%', height: '600px'}}> </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Hero() {
    return (
        <section className="hero is-small">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        Time Line
                    </h1>
                    <h2 className="subtitle">
                        Hero subtitle
                    </h2>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong><a href="https://github.com/hicks-team/timeline-ui">Timeline</a></strong> by <a href="https://github.com/hicksteam">HicksTeam</a>
                </p>
            </div>
        </footer>
    );
}

export default App;
