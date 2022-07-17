import { Date } from '../objects-and-constants/objects';

export function isSameDate(a: Date, b?: Date): boolean {
	if (b === undefined) {
		return false;
	}

	let result = true;

	for (const time in a) {
		if (a[time as keyof Date] !== b[time as keyof Date]) {
			result = false;
		}
	}

	return result;
}
