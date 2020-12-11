import { Form, Button, Modal } from 'react-bootstrap';

const AddMovie = ({ setMovieTitle, setMoviePosterUrl, setMovieRate, setMovieDescription, setFormDisplay, handleSubmit }) => {
    return (
        < Modal.Dialog className="modalDilalog">
            <Modal.Header >
                <Modal.Title>Add New Movie</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form >
                    <Form.Control className="formControl" required onChange={(e) => setMovieTitle(e.target.value)} type="text" placeholder="Title" />
                    <Form.Control className="formControl" required onChange={(e) => setMoviePosterUrl(e.target.value)} type="text" placeholder="URL poster" />
                    <Form.Control className="formControl" required onChange={(e) => setMovieRate(e.target.value)} type="number" placeholder="Rate" />
                    <Form.Control className="formControl" required onChange={(e) => setMovieDescription(e.target.value)} as="textarea" rows={3} placeholder="Description" />
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={() => setFormDisplay(false)} variant="outline-secondary">Close</Button>
                <Button onClick={handleSubmit} type="submit" variant="outline-warning">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
    );

}
export default AddMovie;