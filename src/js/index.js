import '../scss/style.scss';
import { homePage } from './home_page.js';
import { aboutPage } from './about_page.js';
import { membershipPage } from './membership_page';
import {locationPage } from './location_page';

const contentDiv = document.getElementById('content');

const contentPages = [
    {content: homePage, tag: 'home'}, 
    {content: aboutPage, tag: 'about'}, 
    {content: locationPage, tag: 'location'}, 
    {content: membershipPage, tag:'membership'}
]

contentPages.forEach(page => {
    document.getElementById(page.tag).addEventListener('click', () => {
        clearContent();
        contentDiv.appendChild(page.content());
    });
});

function clearContent () {
    [...content.childNodes].forEach((child) => {
        content.removeChild(child)
    });
}

contentDiv.appendChild(homePage);