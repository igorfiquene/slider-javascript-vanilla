import { options } from "./options";

export function prevSlider(sliders) {
	options.currentSlider--
	
	if (options.currentSlider < 0) {
		options.currentSlider = options.sliderLength - 1
	}

	sliders.forEach((slide, index) => {
		slide.style.transform = `translateX(${100 * (index - options.currentSlider)}%)`;
	});
}