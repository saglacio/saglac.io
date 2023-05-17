import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import './FAQPage.scss';

const FAQPage = ({ sections }) => {
  const [openCards, setOpenCards] = useState([]);

  const toggleCard = (index) => {
    const newState = [...openCards];

    if (newState.includes(index)) {
      const position = newState.indexOf(index);
      newState.splice(position, 1);
    } else {
      newState.push(index);
    }

    setOpenCards(newState);
  };

  return (
    <PageLayout title="FAQ">
      <div className="faq-container">
        {sections.map((section, sectionIndex) => (
          <div key={section.header} className="faq-section">
            <h2>{section.header}</h2>
            <div className="faq-cards">
              {section.questions.map((question, questionIndex) => {
                const cardIndex = `${sectionIndex}-${questionIndex}`;
                const isOpen = openCards.includes(cardIndex);
                return (
                  <Card key={question.slug} className="faq-question">
                    <CardHeader onClick={() => toggleCard(cardIndex)}>
                      <ReactMarkdown as="h3">{question.question}</ReactMarkdown>
                      <div className={`arrow ${isOpen ? 'open' : ''}`} />
                    </CardHeader>
                    <Collapse isOpen={isOpen}>
                      <CardBody>
                        <ReactMarkdown>{question.answer}</ReactMarkdown>
                      </CardBody>
                    </Collapse>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default FAQPage;
