import { nextSlider } from "./nextSlider";
import { options } from "./options";

export function Slider({
	sliderContainer,
	sliders
}) {

	let timer

	function setWidthSlider() {
		sliders.forEach((slide, index) => {
			slide.style.transform = `translateX(${index * 100}%)`
		});
	}

	function autoPlay() {
		options.isRunning = true
		
		timer = setTimeout(() => {
			nextSlider(sliders);

			autoPlay()
		}, options.timer);

		
	}

	function hold() {
		options.isRunning = false
		clearTimeout(timer)
	}

	return {
		setWidthSlider,
		autoPlay,
		hold
	}
}