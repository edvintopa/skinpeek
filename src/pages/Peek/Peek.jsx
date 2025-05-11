import { Card, Button } from 'react-bootstrap'

function Peek() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Peek Page</Card.Title>
        <Card.Text>This is the Peek page. Use it to peek around!</Card.Text>
        <Button variant="primary">Do Something</Button>
      </Card.Body>
    </Card>
  )
}

export default Peek