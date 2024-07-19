import { useEffect, useState } from 'react';

import Profile from '../components/Profile';
import About from '../components/About';
import Projects from '../components/Projects';

import '../styles/Home.scss';

const Home = () => {

    const componentSize = 3;
    const [ currIndex, setCurrIndex ] = useState(0);

    useEffect(() => {
        const getPrevIndex = (index) => {
            return index === 0 ? componentSize - 1 : index - 1;
        };
    
        const getNextIndex = (index) => {
            return index === componentSize - 1 ? 0 : index + 1;
        };
    
        const handleWheel = (event) => {
            if (!event.deltaY) return;
    
            if (event.deltaY > 0) {
                if (currIndex !== componentSize - 1) {
                    setCurrIndex(prev => onScroll(prev, 'down'));
                }
            } else {
                if (currIndex > 0) {
                    setCurrIndex(prev => onScroll(prev, 'up'));
                }
            }
        };
    
        const onScroll = (prevIndex, direction) => {
            const items = document.querySelector(`.component-container`).children;
    
            const index = direction === 'up' ? getPrevIndex(prevIndex) : getNextIndex(prevIndex);
            items[prevIndex].classList.remove('scroll-up', 'scroll-down');
            items[index].classList.remove('scroll-hide');
            items[index].classList.add(index > prevIndex ? 'scroll-down' : 'scroll-up');
            items[prevIndex].classList.add('scroll-hide');
    
            return index;
        }

        window.addEventListener('wheel', handleWheel);

        return () => window.removeEventListener('wheel', handleWheel);
    }, [currIndex]);

    return (
        <div className='component-container overflow-hidden h-screen'>
            <div className='component-item scroll-down'><Profile /></div>
            <div className='component-item'><About /></div>
            <div className='component-item'><Projects /></div>
        </div>
    )
}

export default Home