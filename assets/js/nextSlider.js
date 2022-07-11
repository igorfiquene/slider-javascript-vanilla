import { options } from "./options";

export function nextSlider(sliders) {
	options.currentSlider++
	
	if (options.currentSlider === options.sliderLength) {
		options.currentSlider = 0
	}

	sliders.forEach((slide, index) => {
		slide.style.transform = `translateX(${100 * (index - options.currentSlider)}%)`;
	});
}