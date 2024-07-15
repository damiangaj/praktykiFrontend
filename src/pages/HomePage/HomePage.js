import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomePage.css';
import FormFrame from "../../components/FormFrame/FormFrame";
import config from "../../config";

function HomePage() {
    const [forms, setForms] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        fetchForms(page);
        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);
        return () => {
            // Remove event listener on cleanup
            window.removeEventListener('scroll', handleScroll);
        };
    }, [page]);

    const fetchForms = async (page) => {
        try {
            setLoading(true);
            const response = await axios.get(`${config.GET_FORM_URL}?page=${page}`);
            if (response.data.length === 0) {
                setHasMore(false);
            } else {
                setForms(prevForms => [...prevForms, ...response.data]);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching forms:', error);
            setLoading(false);
        }
    };

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && !loading && hasMore) {
            setPage(prevPage => prevPage + 1);
        }
    };

    return (
        <div className="home-page">
            <div className="forms-container">
                {forms.map(form => (
                    <FormFrame key={form.id} form={form} />
                ))}
            </div>
            {loading && <div>Loading...</div>}

        </div>
    );
}

export default HomePage;
