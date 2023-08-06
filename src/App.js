import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar, faCheckCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';


const App = () => {
  const cardData = [
    {
      plan: 'FREE',
      price: '$10',
      user: '5 Users',
      userEnabler: true,
      highlight: true,
      storage: '20 GB Storage',
      storageEnabler: true,
      publicProjects: 'Public Projects',
      publicProjectsEnabler: false,
      communityAccess: 'Community Access',
      communityAccessEnabler: false,
      privateProjects: 'Private Projects',
      privateProjectsEnabler: false,
      subDomain: "Free SubDomain",
      subDomainEnabler: false,
    },
    {
      plan: 'PLUS',
      price: '$25',
      user: '10 Users',
      userEnabler: true,
      highlight: true,
      storage: '50 GB Storage',
      storageEnabler: true,
      publicProjects: 'Public Projects',
      publicProjectsEnabler: true,
      communityAccess: 'Community Access',
      communityAccessEnabler: true,
      privateProjects: 'Private Projects',
      privateProjectsEnabler: false,
      subDomain: "Free SubDomain",
      subDomainEnabler: false,
    },
    {
      plan: 'PRO',
      price: '$50',
      user: '20 Users',
      userEnabler: true,
      highlight: true,
      storage: '100 GB Storage',
      storageEnabler: true,
      publicProjects: 'Public Projects',
      publicProjectsEnabler: true,
      communityAccess: 'Community Access',
      communityAccessEnabler: true,
      privateProjects: 'Private Projects',
      privateProjectsEnabler: true,
      subDomain: "Free SubDomain",
      subDomainEnabler: true,
    },
  ];

  return (
    <div>
      <h1>Price Cards</h1><br/>
      <section className="pricing">
        <div className="container">
          <div className="row">
            {cardData.map((card, index) => (
              <Card key={index} value={card} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;