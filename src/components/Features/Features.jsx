import React from "react";
import featuresData from "./Data";
import "../css/features.css";

function Features({isDark}) {
  return (
    <section className={`features-container ${isDark?'bg-semi-dark':''}`}>
      <div className="features-text-container">
        <h2 className={`features-main-title ${isDark?'text-color':''}`}>Why choose Easybank?</h2>
        <p className="features-paragraph">
          We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
        </p>
      </div>
      <article className="feature-wrapper">
        {featuresData.map((feature) => {
          let descriptionClass;
          if (feature.id === 1) descriptionClass = "first";
          else if (feature.id === 2) descriptionClass = "second";
          else if (feature.id === 3) descriptionClass = "third";
          else descriptionClass = "fourth";

          return (
            <div key={feature.id} className="individual-feature">
              <img src={feature.icon} alt={feature.altText} />
              <h3 className={`feature-title ${isDark?'text-color':''}`}>{feature.title}</h3>
              <p className={`description ${descriptionClass}`}>
                {feature.descpription.split('\n').map((text, index) => (
                  <React.Fragment key={index}>
                    {text}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default Features;