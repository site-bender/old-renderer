export default function makeArray<T>(
	mapper: (x: undefined, i: number) => T,
	len = 0,
): Array<T> {
	return [...Array(len)].map(mapper)
}
