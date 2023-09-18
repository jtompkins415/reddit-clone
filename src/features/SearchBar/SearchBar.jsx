import {useState, useEffect} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './SearchBar.css'


function SearchBar() {
    const [formData, setFormData] = useState({
        searchTerm: ''
    });

    const handleChange = (evnt) => {
        const {name, value} = evnt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }


    const handleSubmit = (evnt) => {
        evnt.preventDefault();
        const {searchTerm} = formData;
        console.log(evnt.target)
        setFormData({
            searchTerm: ''
        });
    };


    return (
            <Form onChange={handleChange} onSubmit={handleSubmit} className='form-container'>
                <div className='input-container'>
                    <FormGroup>
                        <Input
                        id='searchBar'
                        name='searchBar'
                        placeholder='enter search term...'
                        type='text'/>
                    </FormGroup>
                </div>
                <div className='button-container'>
                    <Button>Search</Button>
                </div>
            </Form>
    );
};

export default SearchBar;