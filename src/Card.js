import React from 'react';

const Card = (props) => {
  return (
    
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body text-center">
          <h5 className="card-title text-muted text-uppercase">{props.value.plan}</h5>
          <h6 className="card-price">{props.value.price}/month</h6>
          <hr />
          <ul className="fa-ul">
            <li className={props.value.userEnabler && props.value.highlight ? "fw-bold" : ""}>
              <span className="fa-li" ><i className={props.value.userEnabler ? "fas fa-check" : "fas fa-times"}></i></span>
              {props.value.user}
            </li>

            <li className={props.value.storageEnabler ? "" : "text-muted"}>
              <span className="fa-li"><i className={props.value.storageEnabler ? "fas fa-check" : "fas fa-times"}></i></span>
              {props.value.storage}
            </li>

            <li className={props.value.publicProjectsEnabler ? "" : "text-muted"}>
              <span className="fa-li"><i className={props.value.publicProjectsEnabler ? "fas fa-check" : "fas fa-times"}></i></span>
              {props.value.publicProjects}
            </li>

            <li className={props.value.communityAccessEnabler ? "" : "text-muted"}>
              <span className="fa-li"><i className={props.value.communityAccessEnabler ? "fas fa-check" : "fas fa-times"}></i></span>
              {props.value.communityAccess}
            </li>

            <li className={props.value.privateProjectsEnabler ? "" : "text-muted"}>
              <span className="fa-li"><i className={props.value.privateProjectsEnabler ? "fas fa-check" : "fas fa-times"}></i></span>
              {props.value.privateProjects}
            </li>

            <li className={props.value.subDomainEnabler ? "" : "text-muted"}>
              <span className="fa-li"><i className={props.value.subDomainEnabler ? "fas fa-check" : "fas fa-times"}></i></span>
              {props.value.subDomain}
            </li>

          </ul>

          <div className="d-grid">
            <button className="btn btn-primary text-uppercase">Button</button>
          </div>
        </div>
      </div>
      <br/>
    </div>
  );
};

export default Card;