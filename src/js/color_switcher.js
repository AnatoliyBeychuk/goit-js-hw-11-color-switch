import {colors} from './colors.js';
import {randomIntegerFromInterval} from './utils.js';

const DELAY_INTERVAL = 1000;
const refs =
{
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
    body: document.body,
}
let currentInterval = null;

refs.btnStart.addEventListener('click', (event) =>
{
    currentInterval = setInterval(() =>
    {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, DELAY_INTERVAL);
    // refs.btnStart.setAttribute('disabled', true);
    refs.btnStart.parentElement.classList.add('disabled');
})

refs.btnStop.addEventListener('click', (event) =>
{
    if (currentInterval)
    {
        clearInterval(currentInterval);
        currentInterval = null;
        // refs.btnStart.removeAttribute('disabled');
        refs.btnStart.parentElement.classList.remove('disabled');
    }
})