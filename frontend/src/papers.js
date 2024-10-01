import React from "react";

const Papers = () => {
  const papers = [
    {
      title: "Teaching LLMs to use tools",
      file: "http://localhost:8000/media/portfolio/static/portfolio/TeachingLLMstousetools.pdf",
    },
    {
      title: "Applications of Transformer Models",
      file: "http://localhost:8000/media/portfolio/static/portfolio/ApplicationsofTransformerModels.pdf",
    },
  ];
  return (
    <section id="papers" className="Papers-section">
      <h2 className="section-title">Research</h2>
      <div className="papers-grid">
        {papers.map((paper, index) => (
          <div key={index} className="paper-card">
            <h3>{paper.title}</h3>
            <a href={paper.file} target="_blank" rel="noopener noreferrer">
              <button className="download-btn">Download PDF</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Papers;
