import React from 'react';
import { Card, Button } from 'react-bootstrap';

function PlanCard({ title, features, price }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <strong>{price}</strong>
        </Card.Text>
        <Button variant="primary">Assinar</Button>
      </Card.Body>
    </Card>
  );
}

export default PlanCard;
