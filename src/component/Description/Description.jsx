
import React, { useState } from 'react';
import featured from './../../assets/img/featured-icon.png';
import space from './../../assets/img/space1.png';
import book from './../../assets/img/book2.png';
import hoom from './../../assets/img/hoom3.png';
import control from './../../assets/img/control4.png';
import './Description.css';

export default function Description() {
    const accordionData = [
        {
            id: '1',
            question: 'Best useful links?',
            title: "Get",
            spanS: 'the best villa',
            title2: ' website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the ',
            spanB: 'best free CSS templates',
            title3: 'in the world. Please tell your friends about it.'
        },
        { id: '2', question: 'How does this work?', title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius assumenda provident nisi quos nemo. Beatae.' },
        { id: '3', question: 'Why is Villa agency the best', title: 'TemplateMo provides you the best free CSS templates Please tell your friends about it Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius assumenda provident nisi quos nemo. Beatae.' }
    ];

    const [openAccordion, setOpenAccordion] = useState(null);

    const handleAccordionClick = (id) => {
        setOpenAccordion((prevOpenAccordion) => (prevOpenAccordion === id ? null : id));
    };

    const data = [
        { id: 1, img: space, title: '250 m2', par: 'Total Flat Space' },
        { id: 2, img: book, title: 'Contract', par: 'Contract Ready' },
        { id: 3, img: hoom, title: 'Payment', par: 'Payment', span: 'Process' },
        { id: 4, img: control, title: 'Safety', par: '24/7 Under', span: 'Control' }
    ];

    return (
        <div className='lk-descrip'>
            <div className='lk-descrip-part-o'>
                <div className='lk-descrip-f-img'>
                    <img className='lk-descrip-s-img' src={featured} alt="Featured"/>
                </div>
            </div>
            <div className='lk-descrip-part-T'>
                <div className='lk-descrip-title'>
                    <h4 className='lk-derscrip-h4'>| FEATURED</h4>
                    <h2 className='lk-derscrip-h2'>Best Appartment & Sea View</h2>
                </div>
                <div className='lk-descrip-acordion'>
                    {accordionData.map((item) => (
                        <div key={item.id} className='lk-descrip-acordion-f'>
                            <div
                                className='lk-descrip-view'
                                onClick={() => handleAccordionClick(item.id)}
                            >
                                <h2 className={openAccordion === item.id ? 'lk-descrip-view-h2-color' : 'lk-descrip-view-h2'}>
                                    {item.question}
                                </h2>
                            </div>
                            <div className={openAccordion === item.id ? '' : 'lk-descrip-open'}>
                                <h2 className={openAccordion === item.id ? 'lk-descrip-open-h2' : 'lk-descrip-open-h2-hidd'}>
                                    {item.title}
                                    {item.spanS && <span className='span-strong'>{item.spanS}</span>}
                                    {item.title2}
                                    {item.spanB && <span className='span-blow'>{item.spanB}</span>}
                                    {item.title3}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='lk-descrip-part-TH'>
                {data.map((item) => (
                    <div key={item.id} className='lk-descrip-Box'>


<div className='lk-descrip-Box-o'>
                            <img src={item.img} className='lk-descrip-Box-img' alt={item.title}/>
                            <span className='lk-descrip-Box-span'>{item.span}</span>
                        </div>
                        <div className='lk-descrip-Box-t'>
                            <h2 className='lk-descrip-Box-h2'>{item.title}</h2>
                            <p className='lk-descrip-Box-p'>{item.par}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
