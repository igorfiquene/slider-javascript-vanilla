import '../scss/index.scss'
import { nextSlider } from './nextSlider';
import { options } from './options';
import { prevSlider } from './prevSlider';
import { Slider } from './slider';

addEventListener('load', (event) => {
	const sliderContainer = document.querySelector('.slider')
	const sliders = sliderContainer.querySelectorAll('.slide')
	const buttons = document.querySelectorAll('button')

	const slider = Slider({
		sliderContainer,
		sliders
	})
	
	buttons.forEach(button => {
		button.addEventListener('click', () => {
			switch (button.id) {
				case 'next':
					nextSlider(sliders)	
					break;
					
				case 'prev':
					prevSlider(sliders)
					break;

				case 'pause':
					slider.hold()
					break;

				case 'start':
					if (!options.isRunning) {
						slider.autoPlay()	
					}
					break;
			}
		}) 
	});

})