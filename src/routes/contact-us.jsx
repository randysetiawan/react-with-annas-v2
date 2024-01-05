import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

export default function ContactUs() {
    return (
        <Container>
            <Form>
                <FormGroup>
                    <Label for="name">
                        Full Name
                    </Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email">
                        Email
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                    />
                </FormGroup>                
                <FormGroup>
                    <Label for="message">
                        Message
                    </Label>
                    <Input
                        id="message"
                        name="message"
                        type="textarea"
                    />
                </FormGroup>                
                <Button>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}