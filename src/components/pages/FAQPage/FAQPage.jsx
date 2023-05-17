import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faLink } from '@fortawesome/free-solid-svg-icons';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import PageLayout from '@/components/layout/PageLayout';
import './FAQPage.scss';

const FAQPage = ({ sections }) => {
  const [openedQuestion, setOpenedQuestion] = useState(null);

  useEffect(() => {
    setOpenedQuestion(window.location.hash.substring(1));
  }, []);

  const toggleQuestion = (slug) => {
    setOpenedQuestion(openedQuestion === slug ? null : slug);
  };
  return (
    <PageLayout title="FAQ">
      <div className="faq-container container">
        <Row>
          {sections.map((section) => (
            <Col key={section.header} sm="12" md="6">
              <div className="faq-section">
                <h2>{section.header}</h2>
                {section.questions.map((question) => (
                  <Card
                    key={question.slug}
                    className="faq-question"
                    id={question.slug}
                  >
                    <CardHeader
                      onClick={() => toggleQuestion(question.slug)}
                      className="header-container"
                    >
                      <a href={`#${question.slug}`} className="anchor">
                        <FontAwesomeIcon icon={faLink} />
                      </a>
                      <div className="question-text">
                        <ReactMarkdown>{question.question}</ReactMarkdown>
                      </div>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`expand-icon ${openedQuestion === question.slug ? 'open' : ''}`}
                      />
                    </CardHeader>
                    <Collapse isOpen={openedQuestion === question.slug}>
                      <CardBody>
                        <ReactMarkdown>{question.answer}</ReactMarkdown>
                      </CardBody>
                    </Collapse>
                  </Card>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </PageLayout>
  );
};

export default FAQPage;
