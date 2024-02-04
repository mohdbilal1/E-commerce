import React, { useEffect, useState } from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import SearchFilter from 'react-filter-search';
import ProductCard from '../component/ProductCard';
import Header from '../component/Header';
import axios from 'axios';


const Home = () => {
    const [searchInput, setSearchInput] = useState('');
    const [productData, setProductData] = useState([]);

    async function getResponse() {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProductData(response.data);
            console.log(response.data); // Logging the response data
        } catch (error) {
            console.error('Error fetching product data:', error);
            // Handle the error, such as displaying an error message to the user
        }
    }

    useEffect(() => {
        getResponse();
    }, []);

    return (
        <>
        <Header/>
            <Container className="py-4">
                <Row className="justify-content-center">
                    <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
                        <h1 className='text-black my-5'>Search products</h1>
                        <InputGroup className="mb-3">
                            <InputGroup.Text className='bg-light text-light-primary'>
                                <BiSearch size="2rem" />
                            </InputGroup.Text>
                            <FormControl
                                placeholder="Search"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                className='bg-light text-black'
                            />
                        </InputGroup>
                    </Col>
                    <SearchFilter
                        value={searchInput}
                        data={productData}
                        renderResults={results => (
                            <Row className="justify-content-center">
                                {results.map((item, i) => (
                                    <ProductCard data={item} key={i} />
                                ))}
                            </Row>
                        )}
                    />

                </Row>
            </Container>
        </>

    );
};

export default Home;