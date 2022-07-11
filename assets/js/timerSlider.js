import { nextSlider } from "./nextSlider";
import { options } from "./options";

export let timerSlider = (sliders) => {
	setInterval(() => {
		nextSlider(sliders);
	}, options.timer);
}