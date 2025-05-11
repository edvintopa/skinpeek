import { useState } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Card className="text-center">
            <Card.Body>
              <Button variant="primary" onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </Button>
              <Card.Text className="mt-3">
                Edit <code>src/App.jsx</code> and save to test HMR
              </Card.Text>
            </Card.Body>
          </Card>
          
          <p className="text-center mt-3 text-secondary">
            Click on the Vite and React logos to learn more
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default App