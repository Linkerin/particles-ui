import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Button } from '../Button/Button';
import { Card } from './Card';
import { CardHeader } from './CardHeader/CardHeader';
import { CardBody } from './CardBody/CardBody';
import { CardFooter } from './CardFooter/CardFooter';

const tests = describe('Card component', () => {
  const ClickableCard = () => (
    <Card
      onClick={e => {
        console.log('Filled card clicked');
      }}
      aria-label="Filled action card"
      data-testid="clickable-card"
    >
      <CardHeader>
        <h1>Filled Card </h1>
      </CardHeader>
      <CardBody gap="sm">
        <p>Do. Or do not. There is no try.</p>
        <p>May the Force be with you.</p>
      </CardBody>
      <CardFooter>
        <Button
          onClick={() => {
            console.log('Button clicked');
          }}
        >
          Accept
        </Button>
      </CardFooter>
    </Card>
  );

  it('renders card component', () => {
    render(<ClickableCard />);

    const card = screen.getByTestId('clickable-card');

    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('card md');
  });
});

export default tests;
